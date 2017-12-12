$(function(){
    $.getJSON('/api/todos')
    .then(displayTodos)
});

function displayTodos(todos) {
    var todosLis = todos.map(createTodoLi);
    $('.list').html(todosLis);
}

function createTodoLi(todo){
    var $li = $('<li class="task">' + todo.name + '</li>');

    if(todo.completed) {
        $li.addClass('done');
    }
    return $li;
}