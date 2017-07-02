var vscode = require('vscode');

function activate(context) {

    function scroll() {
    var editor = vscode.window.activeTextEditor
    var currentPosition = editor.selection.active;
    var moveToLine = currentPosition.line + 1;
    if(editor.document.lineCount <= moveToLine) {
        console.log("This would return an error");
        return;
    }
    else {
    var moveToCharactor = editor.document.lineAt(moveToLine).firstNonWhitespaceCharacterIndex;
    var newPosition = new vscode.Position(moveToLine, moveToCharactor);
    console.log("Moving to line " +  moveToLine);
      //Because I'm an idiot
    editor.selection = new vscode.Selection(newPosition, newPosition);
    var newCharStart = editor.selection.active;
    var newCharPos = newCharStart.with(newCharStart.line, editor.document.lineAt(editor.selection.active).text.length);
    console.log("Moving to character position " +  newCharPos);
    var newSelection = new vscode.Selection(newCharPos, newCharPos);
    editor.selection = newSelection;
    }
  

     }

    console.log('Keybinding +1 Command Now Active');

    vscode.commands.registerCommand('extension.cursorStartLine', scroll);
}

exports.activate = activate(vscode.ExtensionContext);

function deactivate() {
}

exports.deactivate = deactivate;