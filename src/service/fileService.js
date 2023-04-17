import getFilePath from "../resource/getFilePath.js";

const fileService = {
	filePath: async () => {
		const result = await getFilePath();
		return result;
	},
};

export default fileService;
