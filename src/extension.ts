import * as vscode from 'vscode';
import { zapToChar } from './commands/zapToChar';
import { shrinkSpaces } from './commands/shrinkSpaces';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(zapToChar());
    context.subscriptions.push(shrinkSpaces());
}

export function deactivate() {}