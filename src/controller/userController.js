import userService from "../service/userService.js";

const userController = {
	getfiscalNotePath: async (req, res) => {
		try {
			// const user = req.query.user;
			const fiscalNotePath = await userService.getfiscalNotePath();
			res.status(200).send(fiscalNotePath);
		} catch (error) {
			res.status(404).send(error.code);
		}
	},
};

export default userController;
