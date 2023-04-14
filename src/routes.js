import { Router } from "express";
import fileController from "./controller/fileController.js";

const routes = Router();

routes.get("/", (req, res) => {
	res.status(200).send("Work's!!");
});

routes.get("/files", fileController.filePath);

export default routes;
