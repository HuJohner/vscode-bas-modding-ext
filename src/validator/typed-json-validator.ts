import * as vscode from 'vscode';
import * as fs from 'fs';
import {
  getLanguageService,
  LanguageService,
  JSONSchema,
  TextDocument as JsonTextDocument
} from 'vscode-json-languageservice';
import { SchemaRegistry } from './schema-registry';

const WARNING_PATTERNS: RegExp[] = [
  /^Array has too few items\./
];

export class TypedJsonValidator implements vscode.Disposable {
  private readonly diagnostics: vscode.DiagnosticCollection;
  private jsonService: LanguageService;
  private readonly registry: SchemaRegistry;
  private readonly disposables: vscode.Disposable[] = [];

  constructor(schemasPaths: string[]) {
    this.diagnostics = vscode.languages.createDiagnosticCollection('typed-json');
    this.jsonService = TypedJsonValidator.createLanguageService();
    this.registry = new SchemaRegistry(schemasPaths);
  }

  private static createLanguageService(): LanguageService {
    return getLanguageService({
      schemaRequestService: async (uri: string): Promise<string> => {
        if (uri.startsWith('file://')) {
          return fs.readFileSync(vscode.Uri.parse(uri).fsPath, 'utf8');
        }
        throw new Error(`Unsupported schema URI scheme: ${uri}`);
      },
      workspaceContext: {
        resolveRelativePath: (relativePath: string, resource: string) =>
          new URL(relativePath, resource).toString()
      }
    });
  }

  async activate(context: vscode.ExtensionContext): Promise<void> {
    await this.registry.load();

    this.disposables.push(
      vscode.workspace.onDidOpenTextDocument(doc => this.validate(doc)),
      vscode.workspace.onDidChangeTextDocument(e => this.validate(e.document)),
      vscode.workspace.onDidCloseTextDocument(doc => this.diagnostics.delete(doc.uri)),
      this.diagnostics
    );

    vscode.workspace.textDocuments.forEach(doc => this.validate(doc));
    context.subscriptions.push(this);
  }

  async update(schemaPaths: string[]): Promise<void> {
    await this.registry.update(schemaPaths);

    this.jsonService = TypedJsonValidator.createLanguageService();

    vscode.workspace.textDocuments
      .filter(d => d.languageId === 'json' || d.languageId === 'jsonc')
      .forEach(doc => this.validate(doc));
  }

  private async validate(doc: vscode.TextDocument): Promise<void> {
    if (doc.languageId !== 'json' && doc.languageId !== 'jsonc') {
      return;
    }

    const text = doc.getText();
    const type = TypedJsonValidator.peekType(text);

    if (!type || !this.registry.has(type)) {
      this.diagnostics.delete(doc.uri);
      return;
    }

    const schemaUri = this.registry.get(type)!;
    const jsonDoc = JsonTextDocument.create(
      doc.uri.toString(),
      'json',
      doc.version,
      text
    );
    const parsed = this.jsonService.parseJSONDocument(jsonDoc);

    const rootSchema: JSONSchema = { $ref: schemaUri };
    const results = await this.jsonService.doValidation(jsonDoc, parsed, { schemaValidation: 'error' }, rootSchema);

    const diagnostics = results.map(r => {
      const range = new vscode.Range(
        r.range.start.line,
        r.range.start.character,
        r.range.end.line,
        r.range.end.character
      );
      const severity = TypedJsonValidator.classifySeverity(r.message as string, r.severity);
        r.severity === 1
          ? vscode.DiagnosticSeverity.Error
          : r.severity === 2
          ? vscode.DiagnosticSeverity.Warning
          : vscode.DiagnosticSeverity.Information;
      const diag = new vscode.Diagnostic(range, r.message as string, severity);
      diag.source = `bas-modding:${type}`;
      return diag;
    });

    this.diagnostics.set(doc.uri, diagnostics);
  }

  dispose(): void {
    this.disposables.forEach(d => d.dispose());
  }

  static peekType(text: string): string | undefined {
    try {
      const value = JSON.parse(text);
      if (value && typeof value === 'object' && typeof value.$type === 'string') {
        return value.$type;
      }
    } catch {
      // Irrelevant JSON - we just skip schema-based validation for this pass.
    }
    return undefined;
  }

  static classifySeverity(message: string, baseSeverity: number | undefined): vscode.DiagnosticSeverity {
    if (WARNING_PATTERNS.some(p => p.test(message))) {
      return vscode.DiagnosticSeverity.Warning;
    }
    return baseSeverity === 1
      ? vscode.DiagnosticSeverity.Error
      : baseSeverity === 2
      ? vscode.DiagnosticSeverity.Warning
      : vscode.DiagnosticSeverity.Information;
  }
}