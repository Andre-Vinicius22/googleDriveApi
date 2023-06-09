import googleDriveApi from "./googleDriveService.js";
import dateService from "./dateService.js";

const fileService = {
	getReceveidFiscalNote: async () => {
		const filePath = await googleDriveApi();

		const DEV = "[DEV]";
		const regex = new RegExp(DEV, "g");
		const devFolder = filePath.filter((element) => regex.test(element));

		const devPath = devFolder.map((str) => str.replace("Meu Drive/", ""));

		const currentMounth = dateService.getCurrentMounth();

		const formatedMounth =
			currentMounth < 10 ? `0${currentMounth}` : currentMounth;

		const noteExists = devPath.map((element) => {
			let [name, file] = element.split("/");
			if (
				element.includes(
					`${dateService.getCurrentYear()}-${formatedMounth}`
				)
			) {
				file = true;
			} else {
				file = false;
			}
			return { name, file };
		});
		return noteExists;
	},
};

export default fileService;
