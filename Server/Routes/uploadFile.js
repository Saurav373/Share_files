import { File } from '../Schema/fileSchema.js'
import { v4 as uuidv4 } from 'uuid';

export const uploadFile = (req, res) => {
    
    const { originalname, mimetype, filename, size } = req.file
    const uniqueId = uuidv4();
    const newFile = new File({ originalname, mimetype, filename, size, uuid: uniqueId });
    newFile.save()
    res.send({downloadLink:uniqueId});
    
}