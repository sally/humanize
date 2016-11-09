// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){
  surveySubmitListener('.survey');
})

function surveySubmitListener(formClass){
  $(formClass).on('submit', function(event){
    event.preventDefault();
    console.log(":D");

    $('#submit-survey-btn').click(function() {
      $('#after-survey-questions').animate({
          left: '-50%'
      }, 500);

      // here is where i would animate another container to swoop in, IF I HAD ONE
    });

    var form = $(this);
    var data = form.serialize();

    

    // make AJAX request to POST to API

    // change this later to be on AJAX success

    // form had <input type="hidden" name="redirect-path" value="tips"> for pre and <input type="hidden" name="redirect-path" value="splash"> for post
    // var redirectPath = $(formClass + ' ' + 'input[name="redirect-path"]').val();
    //
    // // console.log(redirectPath);
    //
    // setTimeout(function () {
    //    window.location.href = "/" + redirectPath;
    // }, 5000);
  })
}
