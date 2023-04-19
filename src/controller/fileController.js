import fileService from "../service/fileService.js";

const fileController = {
	filePath: async (req, res) => {
		try {
			const filePath = await fileService.getFilePath();
			res.status(200).send(filePath);
		} catch (error) {
			res.status(404).send(error.message);
		}
	},
};

export default fileController;
