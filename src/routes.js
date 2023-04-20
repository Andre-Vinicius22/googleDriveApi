import { Router } from "express";
import userController from "./controller/userController.js";
import fileController from "./controller/fileController.js";

const routes = Router();

routes.get("/", (req, res) => {
	res.status(200).send("Work's!!");
});

routes.get("/files", userController.getfiscalNotePath);
routes.get("/current-fiscal-notes", fileController.getCurrentMonthFiscalNote);

export default routes;
