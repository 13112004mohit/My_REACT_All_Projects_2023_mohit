
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const MulterUploads = (uploadsPath) => {

if (!fs.existsSync(uploadsPath)) {
    fs.mkdirSync(uploadsPath,  { recursive: true });
} 

    const storage = multer.diskStorage({
        destination:  function (req, file, cb) {
            cb(null, uploadsPath);
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
        },
    });

    const upload =  multer({ storage: storage });

    return  upload;
};

module.exports = MulterUploads;
