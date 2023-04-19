import getAuthFilePath from "./googleDriveService.js";
import dateService from "./dateService.js";

const fileService = {
	getfiscalNotePath: async () => {
		const filePath = await getAuthFilePath();

		// const verifyExtention = /\.[^./\s]+$/g;
		const folderPath = filePath.filter((element) =>
			element.includes(`${dateService.getCurrentYear()}`)
		);

		if (folderPath.length === 0) {
			throw new Error("folder not found!");
		}

		const fiscalNotePath = folderPath.filter((element) =>
			element.includes(
				`${dateService.getCurrentYear()}-0${dateService.getCurrentMounth()}`
			)
		);

		if (fiscalNotePath.length === 0) {
			throw new Error("note not found!");
		}

		return fiscalNotePath;
	},
};

export default fileService;
