import fileService from "../service/fileService.js";

const fileController = {
	getfiscalNotePath: async (req, res) => {
		try {
			const fiscalNotePath = await fileService.getfiscalNotePath();
			res.status(200).send(fiscalNotePath);
		} catch (error) {
			res.status(404).send(error.message);
		}
	},
};

export default fileController;
