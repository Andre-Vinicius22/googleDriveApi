import getFilePath from "../resource/getFilePath.js";

const fileService = {
	filePath: async () => {
		console.log("chegou aq pirraia");
		const path = async () => {
			return await getFilePath();
		};
		path();
		//console.log(path);
	},
};

export default fileService;
