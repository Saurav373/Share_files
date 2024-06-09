import multer from 'multer'


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 10000)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

export const upload = multer({ storage: storage })