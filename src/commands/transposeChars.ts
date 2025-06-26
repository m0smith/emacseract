import * as vscode from 'vscode';

export function transposeChars(): vscode.Disposable {
    return vscode.commands.registerCommand('emacseract.transposeChars', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;
        const doc = editor.document;
        const pos = editor.selection.active;

        if (pos.character === 0 && pos.line === 0) {
            vscode.window.showInformationMessage('Nothing to transpose.');
            return;
        }

        const line = doc.lineAt(pos.line).text;
        const idx = pos.character;

        if (idx === 0) {
            vscode.window.showInformationMessage('Cursor at line start; can't transpose.');
            return;
        }

        const charBefore = line.charAt(idx - 1);
        const charAt = idx < line.length ? line.charAt(idx) : '';

        const start = new vscode.Position(pos.line, idx - 1);
        const end = new vscode.Position(pos.line, idx + (charAt ? 1 : 0));

        await editor.edit(editBuilder => {
            editBuilder.replace(new vscode.Range(start, end), charAt + charBefore);
        });

        // Move cursor forward if possible
        const newCursorPos = idx < line.length ? pos.translate(0, 1) : pos;
        editor.selection = new vscode.Selection(newCursorPos, newCursorPos);
    });
}