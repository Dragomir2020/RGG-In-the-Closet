// Username is string icon is number 0-15
$(document).ready(function () {
    function init() {
        if (localStorage["username"]) {
            $('#username').val(localStorage["username"]);
        }
    }
    init();
});

// Call this when you want to update the username
$('.stored').keyup(function () {
    localStorage[$(this).attr('username')] = $(this).val();
});

$('.settings').submit(function() {
    localStorage.clear();
});

$(document).ready(function(){
   var $form = $('.settings');
   $form.submit(function(){
      $.post($(this).attr('action'), $(this).serialize(), function(response){
            // do something here on success
      },'json');
      return false;
   });
});