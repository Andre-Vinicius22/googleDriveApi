import { google } from "googleapis";
import keys from "../keys.js"; // credenciais da API

export const googleDriveAuth = google.drive({
  version: "v3",
  auth: new google.auth.JWT(keys.client_id, null, process.env.API_KEY, [
    "https://www.googleapis.com/auth/drive",
  ]),
});
