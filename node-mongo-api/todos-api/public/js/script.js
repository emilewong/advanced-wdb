$(function(){
    $.getJSON('/api/todos')
    .then(displayTodos)

    $('#todoInput').on('keypress', function(e){
        if(e.which == 13) {
            postTodo($(this).val());
        }
    });
});

function displayTodos(todos) {
   todos.forEach(makeTodo);
}

function makeTodo(todo){
    var $li = $('<li class="task">' + todo.name + '</li>');

    if(todo.completed) {
        $li.addClass('done');
    }
    
    $('.list').prepend($li);
}

function postTodo(text) {
    var data = {
        name: text
    }

    $.post('/api/todos', data)
    .then(function(todo){
        makeTodo(todo);
        $('#todoInput').val('');
    })
    .catch(function(err){
        console.log(err)
    });
}