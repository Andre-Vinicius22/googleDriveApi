import {getFolders} from '../resource/getFolders.js';

const fileService = {
    filePath: async () => {
        console.log('chegou aq pirraia')
        let path = await getFolders()
        return path;
    }
}

export default fileService;