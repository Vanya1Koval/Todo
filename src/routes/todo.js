const express = require("express");
const router = express.Router();
const validation = require('../middleware/toDoValidation');
const queryValidation = require('../middleware/queryValidation');
const { isAuthenticated } = require('../middleware/checkToken');
const { 
    createToDoAction, 
    getToDosAction, 
    deleteToDoAction, 
    updateToDoAction 
} = require('../controllers/todo');

router.post('/', isAuthenticated, validation(), createToDoAction);
router.get('/', isAuthenticated, queryValidation(), getToDosAction);
router.delete('/:id', isAuthenticated, deleteToDoAction);
router.put('/:id', isAuthenticated, validation(), updateToDoAction);

module.exports = router;