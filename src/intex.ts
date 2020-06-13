import { IConnection, createConnection, ProposedFeatures, TextDocuments, InitializeParams, TextDocumentSyncKind } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';

let connection: IConnection = createConnection(ProposedFeatures.all);
let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize((params: InitializeParams) => {
    return {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental
        }
    }
});

connection.onInitialized(() => {

});

documents.listen(connection);

connection.listen();