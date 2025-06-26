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

    const doc = editor.document;
    const deletions: vscode.Range[] = [];

    for (const sel of editor.selections) {
      const pos = sel.active;
      const lineEnd = doc.lineAt(doc.lineCount - 1).range.end;
      const text = doc.getText(new vscode.Range(pos, lineEnd));
      const index = text.indexOf(char);

      if (index !== -1) {
        const endPos = pos.translate(0, index + 1);
        deletions.push(new vscode.Range(pos, endPos));
      }
    }

    if (deletions.length === 0) {
      vscode.window.showInformationMessage(`Character '${char}' not found at any cursor.`);
      return;
    }

    await editor.edit(editBuilder => {
      for (const range of deletions) {
        editBuilder.delete(range);
      }
    });
  });
}
