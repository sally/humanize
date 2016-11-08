$(document).on('ready', function(){
  $('#next-survey-btn').click(function() {
    $('#before-survey-questions').animate({
        left: '-50%'
    }, 500, function() {
        $(this).css('left', '150%');
        $(this).appendTo('#survey-container');
    });

    $('#after-survey-questions').animate({
        left: '50%'
    }, 500);
});
})
