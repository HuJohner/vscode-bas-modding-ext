import * as vscode from 'vscode';

import { parseCatalogTypeAndValue } from '../catalog-data/catalogDataParser';
import { CatalogDataCache } from '../catalog-data/catalogDataCache';

export class CatalogDataDefinitionProvider implements vscode.DefinitionProvider {
    
    provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Definition | vscode.DefinitionLink[]> {
        const catalogTypeAndValue = parseCatalogTypeAndValue(document, position);
        if (!catalogTypeAndValue) {
            return undefined;
        }
        
        const [catalogType, id] = catalogTypeAndValue;
        const uri = CatalogDataCache.getUri(catalogType, id);
        if (!uri) {
            return undefined;
        }

        return new vscode.Location(uri, new vscode.Position(0, 0));
    }
}