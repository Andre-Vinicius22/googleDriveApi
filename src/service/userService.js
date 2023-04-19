import fileService from "./fileService.js";

const userService = {
	getfiscalNotePath: async () => {
		const fiscalNotePath = await fileService.getfiscalNotePath();
		return fiscalNotePath;
	},
};

export default userService;
