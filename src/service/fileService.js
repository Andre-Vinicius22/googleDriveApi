import getFilePath from "../resource/getFilePath.js";

const fileService = {
	filePath: async () => {
		const path = await getFilePath();
		console.log(path);

		let date = new Date();
		let year = date.getFullYear();
		let mounth = date.getMonth() + 1;

		const folder = path.filter((element) => element.includes(`${year}`));

		if (folder.length === 0) {
			throw new Error("folder not found!");
		}

		const result = folder.filter(
			(element) =>
				element.includes(`${year}`) && element.includes(`${mounth}`)
		);

		if (result.length === 0) {
			throw new Error("note not found!");
		}
		return result;
	},
};

export default fileService;
