import searchAndDownloadFile from "../service/searchFile.js";

const fileController = {
	foundFile: async (req, res) => {
		try {
			const files = await searchAndDownloadFile(
				"17d1ykq3SHDHP-uF_hH_GcgolKp4wfEPT",
				"2023.1"
			);
			res.json({ success: true, files });
		} catch (err) {
			res.status(500).json({ success: false, message: err.message });
		}
	},
};

export default fileController;
