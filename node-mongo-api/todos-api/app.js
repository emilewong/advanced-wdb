var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);

app.get('/', function(req, res){
    res.send('Hello, World! - From root route');
});

app.listen(3000, function(){
    console.log('server started...');
});