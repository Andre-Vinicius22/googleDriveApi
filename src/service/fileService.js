import getFilePath from "../resource/getFilePath.js";

const fileService = {
  filePath: async () => {
    const path = await getFilePath();
    console.log(path);
    const folder = path.filter((element) => element.includes("2023"));

    if (folder.length === 0) {
      throw new Error("folder not found!");
    }

    const result = folder.filter((element) => element.includes("2023-04"));

    if (result.length === 0) {
      throw new Error("note not found!");
    }
    return result;
  },
};

export default fileService;
