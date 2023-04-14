import { google } from "googleapis";
import { googleDriveAuth } from "../auth/googleAuth.js";

const searchAndDownloadFile = async (fileId, fileName) => {
	console.log("aqui");
	const service = google.drive({ version: "v3", auth: googleDriveAuth });

	try {
		const res = await service.files.get(
			{ fileId, alt: "media" },
			{ responseType: "stream" }
		);
		console.log("chegou??");

		const dest = fs.createWriteStream(fileName);
		await new Promise((resolve, reject) => {
			let progress = 0;
			res.data
				.on("end", () => {
					console.log(`Download concluído ${fileName}.`);
					resolve();
				})
				.on("error", (err) => {
					console.log(`Erro no download ${fileName}.`);
					reject(err);
				})
				.on("data", (d) => {
					progress += d.length;
					if (process.stdout.isTTY) {
						process.stdout.clearLine();
						process.stdout.cursorTo(0);
						process.stdout.write(
							`Download ${fileName}: ${progress} bytes`
						);
					}
				})
				.pipe(dest);
		});
	} catch (err) {
		console.log(err.message);
	}
};

//searchAndDownloadFile: async (fileId, fileName) => {
// return await searchAndDownloadFile(fileId, fileName);

export default searchAndDownloadFile;
