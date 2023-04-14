import fs from "fs/promises";
import path from "path";
import { authenticate } from "@google-cloud/local-auth";
import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/drive.metadata.readonly"];
const TOKEN_PATH = path.join("/home/aline/Área de Trabalho/googleDriveApi/googleDriveApi/src/resource/", "token.json");
const CREDENTIALS_PATH = path.join(
	"/home/aline/Área de Trabalho/googleDriveApi/googleDriveApi/src/resource/",
	"credentials.json"
);

async function loadSavedCredentialsIfExist() {
	try {
		const content = await fs.readFile(TOKEN_PATH);
		const credentials = JSON.parse(content);
		return google.auth.fromJSON(credentials);
	} catch (err) {
		return null;
	}
}

async function saveCredentials(client) {
	const content = await fs.readFile(CREDENTIALS_PATH);
	const keys = JSON.parse(content);
	const key = keys.installed || keys.web;
	const payload = JSON.stringify({
		type: "authorized_user",
		client_id: key.client_id,
		client_secret: key.client_secret,
		refresh_token: client.credentials.refresh_token,
	});
	await fs.writeFile(TOKEN_PATH, payload);
}

async function authorize() {
	let client = await loadSavedCredentialsIfExist();
	if (client) {
		return client;
	}
	client = await authenticate({
		scopes: SCOPES,
		keyfilePath: CREDENTIALS_PATH,
	});
	if (client.credentials) {
		await saveCredentials(client);
	}
	return client;
}

async function listFiles(authClient) {
	const drive = google.drive({ version: "v3", auth: authClient });
	const res = await drive.files.list({
		pageSize: 10,
		fields: "nextPageToken, files(id, name, parents)",
	});

	const files = res.data.files;
	if (files.length === 0) {
		console.log("No files found.");
		return;
	}

	console.log("Files:");
	const getFileParentNames = async (files) => {
		const arq = files.map(async (file) => {
			if (file.parents && file.parents.length) {
			  const fileName = await drive.files.get({
				fileId: file.parents[0],
				fields: "id, name, parents",
			});
				console.log(`${fileName.data.name}/${file.name}`);
			   //return file.name;
			}
		  	})
		  //return await arq;
		  Promise.all(arq);
	  };
	getFileParentNames(files);
}

const getFilePath = async () => {
	try {
		let auth = await authorize();
		const files = await listFiles(auth);
		if (files) {
			return files;
		}
	} catch (error) {
		console.error(error);
	}
};

export default getFilePath;
//authorize().then(listFiles).catch(console.error);