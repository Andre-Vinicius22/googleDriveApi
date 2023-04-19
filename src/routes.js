import { Router } from "express";
import userController from "./controller/userController.js";

const routes = Router();

routes.get("/", (req, res) => {
	res.status(200).send("Work's!!");
});

routes.get("/files", userController.getfiscalNotePath);

export default routes;
