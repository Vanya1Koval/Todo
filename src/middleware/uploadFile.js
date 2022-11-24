const multer = require('multer');
const uuid = require('uuid');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'src/public/files/');
    },
    filename: function(req, file, cb) {
        const arr = file.originalname.split('.');
        cb(null, uuid.v4() + '.' + arr[arr.length - 1]);
    }
});

const uploadFile = multer({ storage }).single('filedata');

module.exports = { storage, uploadFile };