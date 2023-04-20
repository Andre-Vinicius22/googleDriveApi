import fileService from "../service/fileService.js";

const fileController = {
	getCurrentMonthFiscalNote: async (req, res) => {
		try {
			const currentMonthFiscalNote =
				await fileService.getfiscalNotePath();
			res.status(200).send(currentMonthFiscalNote);
		} catch (error) {
			res.status(400).send(error.message);
		}
	},
};

export default fileController;
