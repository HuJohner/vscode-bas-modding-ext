import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import { URL } from 'url';
import { execFile } from 'child_process';
import { promisify } from 'util';
import * as vscode from 'vscode';

import { loadTypeResolvers } from './catalogDataResolver';

const execFileAsync = promisify(execFile);

export interface CatalogDataRepositoryFiles {
    rootPath: string;
    schemaPaths: string[];
    snippetPaths: string[];
}

export class CatalogDataRepository {
    private static files: CatalogDataRepositoryFiles | undefined;

    static async initialize(context: vscode.ExtensionContext): Promise<CatalogDataRepositoryFiles | undefined> {
        const config = vscode.workspace.getConfiguration('bas-modding');
        const repositoryUrl = config.get<string>('dataRepository');
        const branch = config.get<string>('dataBranch', 'main');
        const localRepositoryPath = repositoryUrl && await CatalogDataRepository.isLocalRepository(repositoryUrl)
            ? path.resolve(repositoryUrl)
            : undefined;
        const rootPath = localRepositoryPath ?? (repositoryUrl
            ? path.join(context.globalStorageUri.fsPath, 'catalog-data')
            : context.extensionPath);

        await fs.promises.mkdir(context.globalStorageUri.fsPath, { recursive: true });
        try {
            if (!localRepositoryPath) {
                await CatalogDataRepository.updateCheckout(rootPath, repositoryUrl, branch);
            }
        } catch (error) {
            console.warn(`Unable to update catalog data repository: ${error}`);
        }

        const files = await CatalogDataRepository.loadFiles(rootPath, !repositoryUrl || !!localRepositoryPath)
            ?? (rootPath === context.extensionPath
                ? undefined
                : await CatalogDataRepository.loadFiles(context.extensionPath, true));
        CatalogDataRepository.files = files;
        return files;
    }

    static async refresh(context: vscode.ExtensionContext): Promise<CatalogDataRepositoryFiles | undefined> {
        return CatalogDataRepository.initialize(context);
    }

    static getFiles(): CatalogDataRepositoryFiles | undefined {
        return CatalogDataRepository.files;
    }

    private static async updateCheckout(rootPath: string, repositoryUrl: string | undefined, branch: string): Promise<void> {
        if (!repositoryUrl) {
            return;
        }

        if (await CatalogDataRepository.isGitCheckout(rootPath)) {
            await execFileAsync('git', ['-C', rootPath, 'pull', '--ff-only', 'origin', branch]);
            return;
        }

        if (await CatalogDataRepository.pathExists(rootPath)) {
            await CatalogDataRepository.downloadGitHubRepository(rootPath, repositoryUrl, branch);
            return;
        }

        if (!await CatalogDataRepository.isGitAvailable()) {
            await CatalogDataRepository.downloadGitHubRepository(rootPath, repositoryUrl, branch);
            return;
        }

        await fs.promises.mkdir(path.dirname(rootPath), { recursive: true });
        await execFileAsync('git', ['clone', '--depth', '1', '--branch', branch, repositoryUrl, rootPath]);
    }

    private static async isGitAvailable(): Promise<boolean> {
        try {
            await execFileAsync('git', ['--version']);
            return true;
        } catch {
            return false;
        }
    }

    private static async pathExists(targetPath: string): Promise<boolean> {
        try {
            await fs.promises.access(targetPath);
            return true;
        } catch {
            return false;
        }
    }

    private static async downloadGitHubRepository(rootPath: string, repositoryUrl: string, branch: string): Promise<void> {
        const repository = CatalogDataRepository.parseGitHubRepository(repositoryUrl);
        const treeUrl = `https://api.github.com/repos/${repository.owner}/${repository.name}/git/trees/${encodeURIComponent(branch)}?recursive=1`;
        const tree = JSON.parse((await CatalogDataRepository.fetch(treeUrl, 'application/vnd.github+json')).toString('utf8')) as {
            tree?: Array<{ path: string; type: string }>;
        };
        const entries = (tree.tree ?? []).filter(entry =>
            entry.type === 'blob' && (entry.path === 'type-resolvers.json' || entry.path.startsWith('schemas/') || entry.path.startsWith('snippets/'))
        );
        if (!entries.some(entry => entry.path === 'type-resolvers.json')) {
            throw new Error('GitHub data repository does not contain type-resolvers.json');
        }

        const temporaryRoot = `${rootPath}.tmp-${process.pid}`;
        await fs.promises.rm(temporaryRoot, { recursive: true, force: true });
        try {
            for (const entry of entries) {
                const entryPath = path.join(temporaryRoot, entry.path);
                await fs.promises.mkdir(path.dirname(entryPath), { recursive: true });
                const rawPath = entry.path.split('/').map(part => encodeURIComponent(part)).join('/');
                const rawUrl = `https://raw.githubusercontent.com/${repository.owner}/${repository.name}/${encodeURIComponent(branch)}/${rawPath}`;
                await fs.promises.writeFile(entryPath, await CatalogDataRepository.fetch(rawUrl, 'text/plain'));
            }

            await fs.promises.rm(rootPath, { recursive: true, force: true });
            await fs.promises.rename(temporaryRoot, rootPath);
        } catch (error) {
            await fs.promises.rm(temporaryRoot, { recursive: true, force: true });
            throw error;
        }
    }

    private static parseGitHubRepository(repositoryUrl: string): { owner: string; name: string } {
        const url = new URL(repositoryUrl);
        if (url.hostname !== 'github.com') {
            throw new Error('HTTPS data repository fallback currently supports GitHub URLs only');
        }

        const parts = url.pathname.split('/').filter(Boolean);
        if (parts.length !== 2) {
            throw new Error(`Invalid GitHub repository URL: ${repositoryUrl}`);
        }
        return { owner: parts[0], name: parts[1].replace(/\.git$/, '') };
    }

    private static fetch(url: string, accept: string): Promise<Buffer> {
        return new Promise((resolve, reject) => {
            https.get(url, {
                headers: {
                    ['Accept']: accept,
                    ['User-Agent']: 'vscode-bas-modding'
                }
            }, response => {
                if (response.statusCode !== 200) {
                    response.resume();
                    reject(new Error(`Request failed with HTTP ${response.statusCode}: ${url}`));
                    return;
                }

                const chunks: Buffer[] = [];
                response.on('data', chunk => chunks.push(Buffer.from(chunk)));
                response.on('end', () => resolve(Buffer.concat(chunks)));
                response.on('error', reject);
            }).on('error', reject);
        });
    }

    private static async isGitCheckout(rootPath: string): Promise<boolean> {
        try {
            await fs.promises.access(path.join(rootPath, '.git'));
            return true;
        } catch {
            return false;
        }
    }

    private static async isLocalRepository(repository: string): Promise<boolean> {
        try {
            return (await fs.promises.stat(path.resolve(repository))).isDirectory();
        } catch {
            return false;
        }
    }

    private static async loadFiles(rootPath: string, allowMissingResolver: boolean): Promise<CatalogDataRepositoryFiles | undefined> {
        const resolverPath = path.join(rootPath, 'type-resolvers.json');
        try {
            await fs.promises.access(resolverPath);
            loadTypeResolvers(resolverPath);
        } catch (error) {
            if (!allowMissingResolver) {
                console.warn(`Unable to load catalog type resolvers: ${error}`);
                return undefined;
            }
        }

        return {
            rootPath,
            schemaPaths: await CatalogDataRepository.findFiles(path.join(rootPath, 'schemas')),
            snippetPaths: await CatalogDataRepository.findFiles(path.join(rootPath, 'snippets')),
        };
    }

    private static async findFiles(rootPath: string): Promise<string[]> {
        try {
            const entries = await fs.promises.readdir(rootPath, { withFileTypes: true });
            const files: string[] = [];
            for (const entry of entries) {
                const entryPath = path.join(rootPath, entry.name);
                if (entry.isDirectory()) {
                    files.push(...await CatalogDataRepository.findFiles(entryPath));
                } else if (entry.name.endsWith('.json')) {
                    files.push(entryPath);
                }
            }
            return files;
        } catch {
            return [];
        }
    }
}