import * as vscode from 'vscode';

import CreateNewModCommand = require('./commands/createNewModCommand');

export let rootPath: string;

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "bas-modding" is now active!');

	rootPath = context.extensionPath;

	context.subscriptions.push(vscode.commands.registerCommand('bas-modding.newMod', CreateNewModCommand.run));
}

export function deactivate() {}
