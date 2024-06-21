import { File } from "../Schema/fileSchema.js";

export const DownloadFile = async(req, res) => {
    const { uuid } = req.params;
    const data = await File.findOne({uuid})
    if(!data){
        return res.send('Invalid Url')
    }
    res.send(`/uploads/${data.filename}`)
}