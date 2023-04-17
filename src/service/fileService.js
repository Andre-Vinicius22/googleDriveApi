import getFilePath from "../resource/getFilePath.js";
import dates from "../resource/dates.js";

const fileService = {
	filePath: async () => {
		const path = await getFilePath();
		console.log(path);

		const folder = path.filter((element) =>
			element.includes(`${dates.year}`)
		);

		if (folder.length === 0) {
			throw new Error("folder not found!");
		}

		const result = folder.filter(
			(element) =>
				element.includes(`${dates.year}`) &&
				element.includes(`${dates.mounth}`)
		);

		if (result.length === 0) {
			throw new Error("note not found!");
		}

		return result;
	},
};

export default fileService;
