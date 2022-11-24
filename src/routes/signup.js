const express = require("express");
const validation = require('../middleware/userValidation');
const router = express.Router();
const { 
    signup, 
} = require('../controllers/user');

router.post('/', validation(), signup);

module.exports = router;