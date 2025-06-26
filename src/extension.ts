import * as vscode from 'vscode';
import { zapToChar } from './commands/zapToChar';
import { shrinkSpaces } from './commands/shrinkSpaces';
import { transposeChars } from './commands/transposeChars';
import { killLine } from './commands/killLine';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(zapToChar());
    context.subscriptions.push(shrinkSpaces());
    context.subscriptions.push(transposeChars());
    context.subscriptions.push(killLine());
}

export function deactivate() {}