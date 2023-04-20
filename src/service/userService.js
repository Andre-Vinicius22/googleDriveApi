import fileService from "./fileService.js";

const userService = {
	getAllFiscalNotePath: async () => {
		const fiscalNotePath = await fileService.getfiscalNotePath();
		const obj = fiscalNotePath.map((item) => {
			const [name, file] = item.split("/");
			return { name, file };
		});
		return obj;
	},
};

export default userService;
