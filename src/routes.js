import { Router } from "express";
import searchFile from "./searchFile.js";

const routes = Router();

routes.get("/", (req, res) => {
	res.status(200).send("Work's!!");
});

routes.get("/files", async (req, res) => {
	try {
		const files = await searchFile();
		res.json({ success: true, files });
	} catch (err) {
		res.status(500).json({ success: false, message: err.message });
	}
});

export default routes;
