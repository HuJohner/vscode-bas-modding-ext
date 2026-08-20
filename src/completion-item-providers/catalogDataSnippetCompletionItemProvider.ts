import * as fs from 'fs';
import * as vscode from 'vscode';

import { CatalogDataRepository } from '../catalog-data/catalogDataRepository';

interface SnippetDefinition {
    scope?: string;
    prefix: string | string[];
    body: string | string[];
    description?: string;
}

export class CatalogDataSnippetCompletionItemProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(document: vscode.TextDocument): vscode.ProviderResult<vscode.CompletionItem[]> {
        if (document.languageId !== 'json') {
            return undefined;
        }

        const files = CatalogDataRepository.getFiles();
        if (!files) {
            return undefined;
        }

        const items: vscode.CompletionItem[] = [];
        for (const filePath of files.snippetPaths) {
            let snippets: Record<string, SnippetDefinition>;
            try {
                snippets = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            } catch (error) {
                console.warn(`Unable to load snippets from ${filePath}: ${error}`);
                continue;
            }

            for (const [name, snippet] of Object.entries(snippets)) {
                if (snippet.scope && !snippet.scope.split(',').map(scope => scope.trim()).includes('json')) {
                    continue;
                }

                const prefix = Array.isArray(snippet.prefix) ? snippet.prefix[0] : snippet.prefix;
                const item = new vscode.CompletionItem(prefix, vscode.CompletionItemKind.Snippet);
                item.detail = name;
                item.documentation = snippet.description;
                item.insertText = new vscode.SnippetString(Array.isArray(snippet.body) ? snippet.body.join('\n') : snippet.body);
                items.push(item);
            }
        }
        return items;
    }
}