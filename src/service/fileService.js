import getFilePath from "../resource/getFilePath.js";

const fileService = {
	filePath: async () => {
		const path = await getFilePath();
		console.log(path);
		const result = path.filter((element) => {
			if (element.includes("nota_2023-03.pdf")) {
				return element;
			}
		});
		if (result.length === 0) {
			throw new Error("note not found!");
		}
		return result;
	},
};

export default fileService;
