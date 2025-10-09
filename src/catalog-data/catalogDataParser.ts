import * as vscode from 'vscode';
import * as jsonc from 'jsonc-parser';

import { typeResolver } from '../catalog-data/catalogDataTypeMappers';

export function parseCatalogTypeAndValue(document: vscode.TextDocument, position: vscode.Position) {
    const wordRange = document.getWordRangeAtPosition(position, /"[^"]*"/);
    if (!wordRange) {
        return undefined;
    }

    const errors: jsonc.ParseError[] = [];
    const node = jsonc.parseTree(document.getText(), errors);

    if (errors.length > 0) {
        console.error('JSON parsing errors:', errors);
        return undefined;
    }

    if (!node) {
        return undefined;
    }

    const targetNode = findNodeAtPosition(node, positionToOffset(document, position));
    if (!targetNode || !targetNode.parent?.children) {
        return undefined;
    }

    const propertyKey = findPropertyKey(targetNode);
    if (!propertyKey) {
        return undefined;
    }

    const enclosingNode = findEnclosingObject(targetNode);
    if (!enclosingNode || !enclosingNode.children) {
        return undefined;
    }

    const typeValue = findNodeType(enclosingNode);
    if (!typeValue) {
        return undefined;
    }

    const propertyMapper = typeResolver.get(typeValue);
    if (!propertyMapper) {
        return undefined;
    }

    const catalogType = propertyMapper(propertyKey, enclosingNode);
    if (!catalogType) {
        return undefined;
    }

    const id = targetNode.value;

    return [catalogType, id];
}

export function positionToOffset(document: vscode.TextDocument, position: vscode.Position): number {
    let offset = 0;
    for (let i = 0; i < position.line; i++) {
        offset += document.lineAt(i).text.length + (document.eol === vscode.EndOfLine.LF ? 1 : 2);
    }
    offset += position.character;
    return offset;
}

export function findNodeAtPosition(currentNode: jsonc.Node, pos: number): jsonc.Node | null {
    if (currentNode.offset <= pos && pos <= currentNode.offset + currentNode.length) {
        if (currentNode.children) {
            for (const child of currentNode.children) {
                const found = findNodeAtPosition(child, pos);
                if (found) {
                    return found;
                }
            }
        }
        return currentNode;
    }
    return null;
}

export function findPropertyKey(node: jsonc.Node): string | undefined {
    let parentProperty = node.parent;
    while (parentProperty && parentProperty.type !== 'property' && parentProperty.parent) {
        parentProperty = parentProperty.parent;
    }
    if (!parentProperty?.children) {
        return undefined;
    }
    return parentProperty.children[0].value;
}

export function findEnclosingObject(node: jsonc.Node): jsonc.Node | undefined {
    let parentObject = node.parent;
    while (parentObject && parentObject.type !== 'object' && parentObject.parent) {
        parentObject = parentObject.parent;
    }
    return parentObject;
}

export function findNodeType(node: jsonc.Node): string | undefined {
    if (!node.children) {
        return undefined;
    }
    for (const child of node.children) {
        if (child.children && child.children.length > 1 && child.children[0].value === '$type') {
            return child.children[1].value;
        }
    }
}