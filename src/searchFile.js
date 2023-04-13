import { google } from "googleapis";
import { googleDriveAuth } from "./auth/googleAuth.js";

const searchFile = async () => {
	// Get credentials and build service
	// TODO (developer) - Use appropriate auth mechanism for your app

	const service = google.drive({ version: "v3", auth: googleDriveAuth }); // Correção aqui
	const files = [];

	try {
		const res = await service.files.list({
			q: "mimeType='application/vnd.google-apps.folder'",
			fields: "nextPageToken, files(id, name)",
			spaces: "drive",
		});

		const fileList = res.data.files;
		fileList.forEach(function (file) {
			console.log("Found file:", file.name, file.id);
			files.push(file);
		});

		return fileList;
	} catch (err) {
		// TODO(developer) - Handle error
		console.log(err.message);
	}
};

export default searchFile;
