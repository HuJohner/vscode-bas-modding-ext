import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

import Extension = require('../extension');

const ABORT_NEW = 'Aborted mod creation';
const FAILED_NEW = 'Failed to create BaS mod';
const SUCCESS_NEW = 'Created BaS mod';

export function run(uri: vscode.Uri) {
    // get current path
    if (uri === undefined) {
        return vscode.window.showErrorMessage('No current path available');
    }
    let filepath = uri.fsPath;

    // get correct current directory
    let curDir = filepath;
    if (!fs.statSync(curDir).isDirectory()) {
        curDir = path.dirname(filepath);
    }

    // ask for mod name
    let input = vscode.window.showInputBox({
        prompt: 'Enter Mod name',
        validateInput: value => {
            // check if folder already exists
            if (fs.existsSync(path.join(curDir, value))) {
                return 'This folder already exists. Please retry with a valid mod name';
            }
        }
    });
    input.then(modName => {
        if (!modName) {
            return vscode.window.showWarningMessage(ABORT_NEW);
        }
        const dir = path.join(curDir, modName);

        // generate mod folder
        fs.mkdirSync(dir);

        // ask for description
        input = vscode.window.showInputBox({
            prompt: 'Enter mod description'
        });
        input.then(description => {
            // ask for authors username
            input = vscode.window.showInputBox({
                prompt: 'Enter author username',
                value: vscode.workspace.getConfiguration('bas-modding')['username']
            });
            input.then(author => {
                
                // generate manifest file
                const newFilePath = path.join(dir, "manifest.json");
                const manifestTemplate = fs.readFileSync(path.join(Extension.rootPath, 'templates/manifest.template'), 'utf8');
                fs.writeFile(newFilePath, manifestTemplate.replace('<name>', modName).replace('<description>', description ?? '').replace('<author>', author ?? ''), err => {
                    if (err) {
                        console.error(err);
                        return vscode.window.showErrorMessage(FAILED_NEW);
                    }
                });

                vscode.window.showInformationMessage(SUCCESS_NEW);
            });
        });
    });
}