import * as vscode from 'vscode';
import { CatalogDataCache } from './catalog-data/catalogDataCache';
import { CatalogDataRepository } from './catalog-data/catalogDataRepository';
import { CatalogDataDefinitionProvider } from './definition-providers/catalogDataDefinitionProvider';
import { CatalogDataCompletionItemProvider } from './completion-item-providers/catalogDataCompletionItemProvider';
import { CatalogDataSnippetCompletionItemProvider } from './completion-item-providers/catalogDataSnippetCompletionItemProvider';

import CreateNewModCommand = require('./commands/createNewModCommand');
import { TypedJsonValidator } from './validator/typed-json-validator';

export let rootPath: string;

export async function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "bas-modding" is now active!');

	const repositoryFiles = await CatalogDataRepository.initialize(context);
  const validator = new TypedJsonValidator(repositoryFiles?.schemaPaths ?? []);
  validator.activate(context);
	await CatalogDataCache.initialize(context);

	rootPath = context.extensionPath;

	context.subscriptions.push(vscode.commands.registerCommand('bas-modding.newMod', CreateNewModCommand.run));
	context.subscriptions.push(vscode.commands.registerCommand('bas-modding.refreshData', async () => {
		const files = await CatalogDataRepository.refresh(context);
		await validator.update(files?.schemaPaths ?? []);
		vscode.window.showInformationMessage('BaS modding data refreshed.');
	}));

	context.subscriptions.push(vscode.languages.registerDefinitionProvider({ language: 'json', scheme: 'file' }, new CatalogDataDefinitionProvider()));
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ language: 'json', scheme: 'file' }, new CatalogDataCompletionItemProvider()));
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ language: 'json', scheme: 'file' }, new CatalogDataSnippetCompletionItemProvider()));
	context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(async event => {
		if (event.affectsConfiguration('bas-modding.dataRepository') || event.affectsConfiguration('bas-modding.dataBranch')) {
			const files = await CatalogDataRepository.refresh(context);
			await validator.update(files?.schemaPaths ?? []);
		}
	}));

	const config = vscode.workspace.getConfiguration('files');
	const readonlyInclude: { [key: string]: boolean } = config.get('readonlyInclude', {});
	const pattern = '**/BuildStaging/Catalogs/Default/**/*.json';
	if (!readonlyInclude[pattern]) {
		readonlyInclude[pattern] = true;
		config.update(
			'readonlyInclude',
			readonlyInclude,
			vscode.ConfigurationTarget.Workspace
		).then(
			() => console.log('Successfully updated files.readonlyInclude'),
			(error) => console.error('Failed to update files.readonlyInclude:', error)
		);
	}
}

export function deactivate() {
	CatalogDataCache.dispose();
}
