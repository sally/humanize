// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){
  surveySubmitListener('.survey');
})

function surveySubmitListener(formClass){
  $(formClass).on('submit', function(event){
    event.preventDefault();
    console.log(":D");

    var form = $(this);
    var data = form.serialize();
    var redirectPath = $(formClass + ' ' + 'input[name="redirect-path"]').val();

    // console.log(redirectPath);

    setTimeout(function () {
       window.location.href = "/" + redirectPath;
    }, 5000);
  })
}
