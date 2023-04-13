import express from "express";
import * as dotenv from "dotenv";
import routes from "./routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
