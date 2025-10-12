import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class CatalogDataCache {
    private static uriCache = new Map<string, vscode.Uri>();
    private static reverseUriCache = new Map<vscode.Uri, (string | undefined)[]>();
    private static valuesCache = new Map<string, string[]>();
    private static watcher: vscode.FileSystemWatcher | undefined;

    static async initialize(context: vscode.ExtensionContext) {
        await CatalogDataCache.buildCache();

        context.subscriptions.push(
            vscode.workspace.onDidChangeConfiguration(e => {
                if (e.affectsConfiguration('bas-modding.sdkPath')) {
                    CatalogDataCache.buildCache();
                }
            })
        );

        CatalogDataCache.setupFileSystemWatcher(context);
    }

    private static async buildCache() {
        CatalogDataCache.uriCache.clear();
        CatalogDataCache.reverseUriCache.clear();
        CatalogDataCache.valuesCache.clear();

        const config = vscode.workspace.getConfiguration('bas-modding');
        const sdkPath = config.get<string>('sdkPath');
        if (sdkPath) {
            const sdkFiles = await CatalogDataCache.findFiles(path.join(sdkPath, 'BuildStaging', 'Catalogs', 'Default', 'bas'));
            for (const filePath of sdkFiles) {
                const uri = vscode.Uri.file(filePath);
                await CatalogDataCache.parseFileForDefinitions(uri);
            }
            console.log(`Built cache from SDK with ${CatalogDataCache.uriCache.size} entries from ${sdkFiles.length} files.`);
        }
        const projectFiles = await vscode.workspace.findFiles('**/*.json');
        for (const uri of projectFiles) {
            if (uri.fsPath.includes('manifest.json') || uri.fsPath.includes('catalog_')) {
                continue;
            }
            await CatalogDataCache.parseFileForDefinitions(uri);
        }
    }

    private static async findFiles(dir: string): Promise<string[]> {
        const entries = await fs.promises.readdir(dir, { withFileTypes: true });
        const files: string[] = [];
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                files.push(...await this.findFiles(fullPath));
            } else if (entry.name.match(/\.json$/)) {
                files.push(fullPath);
            }
        }
        return files;
    }

    private static async parseFileForDefinitions(uri: vscode.Uri) {
        try {
            const content = await fs.promises.readFile(uri.fsPath, 'utf-8');
            
            const json = JSON.parse(content);
            if (!json.$type || !json.id) {
                return;
            }

            const cacheKey = `${json.$type}.${json.id}`;
            if (!CatalogDataCache.uriCache.has(cacheKey)) {
                CatalogDataCache.uriCache.set(cacheKey, uri);

                let generalType = undefined;
                if (json.$type.startsWith('ThunderRoad.AreaCollection')) {
                    generalType = 'ThunderRoad.AreaCollection, ThunderRoad';
                } else if (json.$type.startsWith('ThunderRoad.StatusData')) {
                    generalType = 'ThunderRoad.StatusData, ThunderRoad';
                } else if (json.$type.startsWith('ThunderRoad.Skill.Spell.SpellCast')) {
                    generalType = 'ThunderRoad.SpellCastData, ThunderRoad';
                } else if (json.$type.startsWith('ThunderRoad.Skill.')) {
                    generalType = 'ThunderRoad.SkillData, ThunderRoad';
                }
                const generalCacheKey = generalType ? `${generalType}.${json.id}` : undefined;
                if (generalCacheKey) {
                    CatalogDataCache.uriCache.set(generalCacheKey, uri);
                }

                CatalogDataCache.reverseUriCache.set(uri, [cacheKey, generalCacheKey]);

                if (generalType) {
                    if (!CatalogDataCache.valuesCache.has(generalType)) {
                        CatalogDataCache.valuesCache.set(generalType, [json.id]);
                    } else {
                        CatalogDataCache.valuesCache.get(generalType)?.push(json.id);
                    }
                } else {
                    if (!CatalogDataCache.valuesCache.has(json.$type)) {
                        CatalogDataCache.valuesCache.set(json.$type, [json.id]);
                    } else {
                        CatalogDataCache.valuesCache.get(json.$type)?.push(json.id);
                    }
                }  
            }
        } catch (err) {
            console.warn(`Failed to parse ${uri.fsPath}: ${err}`);
        }
    }

    static getUri(typeValue: string, id: string): vscode.Uri | undefined {
        return CatalogDataCache.uriCache.get(`${typeValue}.${id}`);
    }

    static getKey(uri: vscode.Uri): (string | undefined)[] | undefined {
        return CatalogDataCache.reverseUriCache.get(uri);
    }

    static getValues(typeValue: string): string[] | undefined {
        return CatalogDataCache.valuesCache.get(typeValue);
    }

    private static setupFileSystemWatcher(context: vscode.ExtensionContext) {
        if (CatalogDataCache.watcher) {
            return;
        }

        CatalogDataCache.watcher = vscode.workspace.createFileSystemWatcher('**/*.json');

        const rebuild = (uri: vscode.Uri) => {
            const keys = CatalogDataCache.getKey(uri);
            if (keys && keys[0]) {
                CatalogDataCache.uriCache.delete(keys[0]);
                if (keys[1]) {
                    CatalogDataCache.uriCache.delete(keys[1]);
                }
                CatalogDataCache.reverseUriCache.delete(uri);

                const [type, id] = (keys[1] ? keys[1] : keys[0]).split('.');
                const values = CatalogDataCache.valuesCache.get(type);
                const index = values?.indexOf(id) ?? -1;
                if (index > -1) {
                    values?.splice(index, 1);
                }
            }
            if (fs.existsSync(uri.fsPath)) {
                CatalogDataCache.parseFileForDefinitions(uri);
            }
        };

        CatalogDataCache.watcher.onDidChange(rebuild);
        CatalogDataCache.watcher.onDidCreate(rebuild);
        CatalogDataCache.watcher.onDidDelete(rebuild);

        context.subscriptions.push(CatalogDataCache.watcher);
    }

    static dispose() {
        CatalogDataCache.watcher?.dispose();
    }
}