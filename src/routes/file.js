const express = require("express");
const router = express.Router();
const { 
    uploadFile, 
} = require('../middleware/uploadFile');

router.post('/', (req, res) => {
    uploadFile
    return res.send('file was uploaded')
});

module.exports = router;