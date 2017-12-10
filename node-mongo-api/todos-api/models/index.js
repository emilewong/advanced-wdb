var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-api', {useMongoClient: true});
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');