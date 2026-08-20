import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { JSONSchema } from 'vscode-json-languageservice';

export class SchemaRegistry {
  private uriByType = new Map<string, string>();

  constructor(private schemasPaths: string[]) {}

  async load(): Promise<void> {
    this.uriByType.clear();

    let skipCount = 0;
    for (const fullPath of this.schemasPaths) {
      const file = path.basename(fullPath);
      try {
        const raw = fs.readFileSync(fullPath, 'utf8');
        const schema = JSON.parse(raw) as JSONSchema & { 'x-type'?: string };
        const type = schema['x-type'];
        if (!type) {
          skipCount += 1;
          continue;
        }
        this.uriByType.set(type, vscode.Uri.file(fullPath).toString());
      } catch (err) {
        console.error(`Failed to parse ${file}:`, err);
      }
      if (skipCount > 0) {
        console.info(`Skipped ${skipCount} schemas due to missing "x-type"`);
      }
    }
  }

  get(type: string): string | undefined {
    return this.uriByType.get(type);
  }

  has(type: string): boolean {
    return this.uriByType.has(type);
  }

  async update(schemaPaths: string[]): Promise<void> {
    this.schemasPaths = schemaPaths;
    await this.load();
  }
}