import { File } from "../Schema/fileSchema.js"

export const downloadFile = async (req, res) => {
    const { uniqueId } = req.body;
    console.log(req.body);
    const data = await File.findOne({ uuid: uniqueId })
    if (!data) {
        return res.json({ status: false })
    }
    const { filename, originalname, size } = data
    res.send({ filename, originalname, size, status: true })
}