import * as vscode from 'vscode';

export function zapToChar(): vscode.Disposable {
    return vscode.commands.registerCommand('emacseract.zapToChar', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const char = await vscode.window.showInputBox({
            prompt: "Zap to char: delete up to and including the next occurrence of...",
            validateInput: input => input.length === 1 ? null : "Enter exactly one character"
        });

        if (!char) return;

        const document = editor.document;
        const startPos = editor.selection.active;
        const text = document.getText(new vscode.Range(startPos, document.lineAt(document.lineCount - 1).range.end));
        const index = text.indexOf(char);

        if (index === -1) {
            vscode.window.showInformationMessage(`Character '${char}' not found.`);
            return;
        }

        const endPos = startPos.translate(0, index + 1);
        const deleteRange = new vscode.Range(startPos, endPos);

        await editor.edit(editBuilder => {
            editBuilder.delete(deleteRange);
        });
    });
}