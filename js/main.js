$(document).ready( function() {
    var input = $('.task-new');
    var taskList = $('.task-list');

    input.keyup(function(e) {
        if (e.which == 13 || e.keycode == 13) {
            var item = $('.template li').clone();
            item.prepend(input.val());
            taskList.append(item);
        }
    });



























}); // <-- End ready