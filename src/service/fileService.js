import getAuthFilePath from "./googleDriveService.js";
import dateService from "./dateService.js";

const fileService = {
	getFilePath: async () => {
		const filePath = await getAuthFilePath();
		console.log(filePath);

		const verifyExtention =  /\.[^./\s]+$/g;
		
		const folderPath = filePath.filter((element) => 
			element.includes(`${dateService.getCurrentYear()}`) && !verifyExtention.exec(element)
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
