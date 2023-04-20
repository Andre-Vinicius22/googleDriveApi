import userService from "../service/userService.js";

const userController = {
	getfiscalNotePath: async (req, res) => {
		try {
			const fiscalNotePath = await userService.getAllFiscalNotePath();
			res.status(200).send(fiscalNotePath);
		} catch (error) {
			res.status(404).send(error.message);
		}
	},
	getUserFolder: async (req, res) => {
		try {
			const user = req.query.user;
			const userFolder = await userService.getUserFolder(user);
			if (userFolder) {
			}
			res.status(200).send(userFolder);
		} catch (error) {
			res.status(400).send(error.message);
		}
	},
};

export default userController;
