import { google } from "googleapis";
import { googleDriveAuth } from "../auth/googleAuth.js";

const searchAndDownloadFile = async (fileId, fileName) => {
	console.log("aqui");
	const service = google.drive({ version: "v3", auth: googleDriveAuth });

	try {
		// Step 1: Busque o arquivo pelo ID
		const res = await service.files.get(
			{ fileId, alt: "media" },
			{ responseType: "stream" }
		);
		console.log("chegou??");

		// Step 2: Crie um stream para salvar o arquivo
		const dest = fs.createWriteStream(fileName);

		// Step 3: Espera o stream terminar de gravar
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
