$(document).ready(function() {
    $('#task-form').on('submit', function(e) {
        e.preventDefault();

        const task = $('#task-input').val();

        $('#task-list').append('<li><span>' + task + '</span><button class="delete-btn">Excluir</button></li>');

        $('#task-input').val('');
    });

    $('#task-list').on('click', 'li', function(e) {
        if (!$(e.target).is('button')) {
            $(this).find('span').toggleClass('line-through');
        }
    });

    $('#task-list').on('click', '.delete-btn', function(e) {
        e.stopPropagation(); 
        $(this).parent().remove();
    });

    $('#clear-tasks').on('click', function() {
        $('#task-list').empty();
    });
});