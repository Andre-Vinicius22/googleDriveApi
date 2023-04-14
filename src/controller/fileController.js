import fileService from "../service/fileService.js";

const fileController = {
	filePath: async (req, res) => {
		try {
			let filePath = fileService.filePath()
			console.log(filePath);
			res.status(200).send(filePath);
		} catch (error) {
			res.status(404).send(error.message);
		}
	}
};

export default fileController;
