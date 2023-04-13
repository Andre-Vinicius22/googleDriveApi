import { google } from "googleapis";
import keys from "../keys.json"; // credenciais da API

export const googleDriveAuth = google.drive({
	version: "v3",
	auth: new google.auth.JWT(keys.client_email, null, keys.private_key, [
		"https://www.googleapis.com/auth/drive",
	]),
});
