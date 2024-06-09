import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { connectToMongoDB } from './Server/DB/db.js'
import { upload } from './Server/Controllers/multerConfig.js'
import { uploadFile } from './Server/Routes/uploadFILe.js'
import { downloadFile } from './Server/Routes/downloadFile.js'


const app = express()
const PORT = 3000

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.static(join(__dirname, 'uploads')));

connectToMongoDB()


app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/upload', upload.single('file'), uploadFile)
app.post('/download', downloadFile)

app.listen(PORT, () => {
    console.log('App listening on http://localhost:' + PORT);
})