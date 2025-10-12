import * as vscode from 'vscode';
import { CatalogDataCache } from './catalog-data/catalogDataCache';
import { CatalogDataDefinitionProvider } from './definition-providers/catalogDataDefinitionProvider';
import { CatalogDataCompletionItemProvider } from './completion-item-providers/catalogDataCompletionItemProvider';

import CreateNewModCommand = require('./commands/createNewModCommand');

export let rootPath: string;

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "bas-modding" is now active!');

    CatalogDataCache.initialize(context);

	rootPath = context.extensionPath;

	context.subscriptions.push(vscode.commands.registerCommand('bas-modding.newMod', CreateNewModCommand.run));

	context.subscriptions.push(vscode.languages.registerDefinitionProvider({ language: 'json', scheme: 'file' }, new CatalogDataDefinitionProvider()));
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ language: 'json', scheme: 'file' }, new CatalogDataCompletionItemProvider()));

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
