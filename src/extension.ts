import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	console.log('Running..!');
	let disposable = vscode.commands.registerCommand('extension.testexe', () => {
		let udata;		
		if(vscode.workspace.workspaceFolders)
		{
			const root = vscode.workspace.workspaceFolders[0].uri.path.substr(1);
			fs.readFile(path.join(root,"user.json"),(err:any,data:any)=>{
				if(err) throw err;
				udata = JSON.parse(data.toString());
				console.log(udata);
			});
		}
	});
	context.subscriptions.push(disposable);
}

export function deactivate() { }
