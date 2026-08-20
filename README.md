# bas-modding README
[Visual Studio Code](https://code.visualstudio.com) extenstion that allows you to quickly create Blade & Sorcery mods.

## Features

1. New Mod context command to create a folder and manifest file.

2. Definition linking and auto-completion suggestions for CatalogData

3. Snippets to easily create a quest.

4. JSON validation for Quests.

## Requirements

Git is optional. When Git is unavailable, GitHub repositories are downloaded over HTTPS.

## Runtime data repository

Schemas, snippets, and catalog type resolvers are loaded from a Git repository at runtime.
The repository is cached in VS Code global storage and updated when the extension activates. If Git is unavailable, the configured GitHub repository is downloaded over HTTPS instead. Run `BaS Mod: Refresh BaS Modding Data` after changing the repository. The last successful cache remains available when the user is offline.

## Known Issues

Check the issues on Github [here](https://github.com/HuJohner/vscode-bas-modding-ext/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Abug) Feel free to report any issues that you have.

## Release Notes

You can find the full changelog [here](https://github.com/HuJohner/vscode-bas-modding-ext/blob/main/CHANGELOG.md).
