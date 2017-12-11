var express = require('express');
var router = express.Router();
var helpers = require('../helpers/todos-helpers');

//INDEX
router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo);

//SHOW
router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo)


module.exports = router;