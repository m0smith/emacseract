import * as vscode from 'vscode';

export function killLine(): vscode.Disposable {
    return vscode.commands.registerCommand('emacseract.killLine', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const pos = editor.selection.active;
        const line = editor.document.lineAt(pos.line);

        const range = new vscode.Range(pos, line.range.end);

        await editor.edit(editBuilder => {
            editBuilder.delete(range);
        });
    });
}