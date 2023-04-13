import express from "express";
import * as dotenv from "dotenv";
import searchFile from "./searchFile.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("Work's!!");
});

app.get("/files", async (req, res) => {
  try {
    const files = await searchFile(req);
    res.json({ success: true, files });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
