import getFilePath from "./googleDriveService.js";
import dateService from "./dateService.js";

const fileService = {
	filePath: async () => {
		const path = await getFilePath();
		console.log(path);

		const folder = path.filter((element) =>
			element.includes(`${dateService.getCurrentYear()}`)
		);

		if (folder.length === 0) {
			throw new Error("folder not found!");
		}

		const result = folder.filter((element) =>
			element.includes(
				`${dateService.getCurrentYear()}-0${dateService.getCurrentMounth()}`
			)
		);

		if (result.length === 0) {
			throw new Error("note not found!");
		}

		return result;
	},
};

export default fileService;
