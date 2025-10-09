import * as vscode from 'vscode';

import { parseCatalogTypeAndValue } from '../catalog-data/catalogDataParser';
import { CatalogDataCache } from '../catalog-data/catalogDataCache';

export class CatalogDataCompletionItemProvider implements vscode.CompletionItemProvider {

    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
        const catalogTypeAndValue = parseCatalogTypeAndValue(document, position);
        if (!catalogTypeAndValue) {
            return undefined;
        }
        
        const [catalogType, _] = catalogTypeAndValue;
        const ids = CatalogDataCache.getValues(catalogType);
        
        return ids?.map(id => new vscode.CompletionItem(id, vscode.CompletionItemKind.Value));
    }

}