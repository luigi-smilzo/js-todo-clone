$(document).ready( function() {
    var input = $('.task-new');
    var taskList = $('.task-list');

    input.keyup(function(e) {
        
        if (input.val() != '') {
            if (e.which == 13 || e.keycode == 13) {
                var item = $('.template li').clone();
                item.prepend(input.val().trim());
                taskList.append(item);
                input.val('');
            }
        }

    });

    $('body').on('click', '.task-list li i', function() {
        if ($(this).parent().attr('data-status') == 'completed') {
            $(this).parent().fadeOut(function() {
                $(this).remove();
            });
        } else {
            $(this).parent().attr('data-status', 'completed');
            $(this).removeClass('fas fa-check-square').addClass('far fa-trash-alt');
        }
    });



























}); // <-- End ready