import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectToMongoDB } from './Server/DB/db.js'
import { upload } from './Server/Controllers/multerConfig.js'
import { uploadFile } from './Server/Routes/uploadFILe.js'


const app = express()
const PORT = 3000

dotenv.config()
app.use(cors())
connectToMongoDB()


app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/upload', upload.single('file'), uploadFile)

app.listen(PORT, () => {
    console.log('App listening on http://localhost:' + PORT);
})