import * as vscode from 'vscode';

export function shrinkSpaces(): vscode.Disposable {
    return vscode.commands.registerCommand('emacseract.shrinkSpaces', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const doc = editor.document;
        const pos = editor.selection.active;
        const lineText = doc.lineAt(pos.line).text;

        const before = lineText.slice(0, pos.character);
        const after = lineText.slice(pos.character);

        const matchBefore = before.match(/\s+$/);
        const matchAfter = after.match(/^\s+/);

        if (!matchBefore && !matchAfter) {
            vscode.window.showInformationMessage("No surrounding spaces to collapse.");
            return;
        }

        const start = pos.translate(0, - (matchBefore?.[0].length || 0));
        const end = pos.translate(0, matchAfter?.[0].length || 0);
        const range = new vscode.Range(start, end);

        await editor.edit(editBuilder => {
            editBuilder.replace(range, ' ');
        });
    });
}
