/**
 * Search file in drive location
 * @return{obj} data file
 * */
import { google } from "googleapis";
import { googleDriveAuth } from "./auth/googleAuth.js";

const searchFile = async () => {
	// Get credentials and build service
	// TODO (developer) - Use appropriate auth mechanism for your app

	const service = google.drive({ version: "v3", googleDriveAuth });
	const files = [];
	try {
		const res = async () => {
			await service.files.list({
				q: "application/vnd.google-apps.folder",
				fields: "nextPageToken, files(id, name)",
				spaces: "drive",
			});
		};
		Array.prototype.push.apply(files, res.files);
		res.data.files.forEach(function (file) {
			console.log("Found file:", file.name, file.id);
		});
		return res.data.files;
	} catch (err) {
		// TODO(developer) - Handle error
		console.log(err.message);
	}
};

export default searchFile;
