import * as fs from 'fs';
import * as jsonc from 'jsonc-parser';

export type CatalogDataMapper = (key: string, node: jsonc.Node) => string | undefined;

export interface ResolverDefinition {
    properties?: Record<string, string>;
    conditions?: Array<{
        property: string;
        values: Record<string, Record<string, string>>;
    }>;
}

export interface GeneralTypePrefix {
    prefix: string;
    type: string;
}

export const typeResolver = new Map<string, CatalogDataMapper>();
const generalTypePrefixes: GeneralTypePrefix[] = [];

export function loadTypeResolvers(filePath: string): void {
    const definitions = JSON.parse(fs.readFileSync(filePath, 'utf8')) as Record<string, ResolverDefinition>;
    typeResolver.clear();
    generalTypePrefixes.length = 0;

    const metadata = definitions.$generalTypePrefixes as unknown as GeneralTypePrefix[] | undefined;
    if (metadata) {
        generalTypePrefixes.push(...metadata);
    }

    for (const [type, definition] of Object.entries(definitions)) {
        if (type === '$generalTypePrefixes') {
            continue;
        }

        typeResolver.set(type, (key, node) => {
            const propertyType = definition.properties?.[key];
            if (propertyType) {
                return propertyType;
            }

            for (const condition of definition.conditions ?? []) {
                const conditionValue = findChildPropertyValue(node, condition.property);
                const properties = condition.values[conditionValue ?? ''];
                const propertyType = properties?.[key];
                if (propertyType) {
                    return propertyType;
                }
            }

            return undefined;
        });
    }
}

export function getGeneralType(type: string): string | undefined {
    return generalTypePrefixes.find(({ prefix }) => type.startsWith(prefix))?.type;
}

function findChildPropertyValue(node: jsonc.Node, name: string): string | undefined {
    for (const child of node.children ?? []) {
        if (child.children && child.children.length > 1 && child.children[0].value === name) {
            return child.children[1].value;
        }
    }
    return undefined;
}