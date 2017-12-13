$(function(){
    $.getJSON('/api/todos')
    .then(displayTodos)

    $('#todoInput').on('keypress', function(e){
        if(e.which == 13) {
            postTodo($(this).val());
        }
    });

    $('.list').on('click', 'span', function(){
        var id = $(this).parent().data('id');

        deleteTodo($(this).parent());
    });
});

function displayTodos(todos) {
   todos.forEach(makeTodo);
}

function makeTodo(todo){
    var $li = $('<li class="task">' + todo.name + '<span>X</span></li>');
    $li.data('id', todo._id)

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

function deleteTodo(todo) {
    var id = todo.data('id');
    $.ajax({
        method: 'DELETE',
        url: '/api/todos/'+id
    })
    .then(function(data){
        console.log(data);
        todo.remove();
    })
    .catch(function(err){
        console.log(err)
    });
}