import getFolders from "../resource/getFolders.js";

const fileService = {
	filePath: async () => {
		console.log("chegou aq pirraia");
		const path = async () => {
			return [await getFolders()];
		};
		return Promise.all([path]);
	},
};

export default fileService;
