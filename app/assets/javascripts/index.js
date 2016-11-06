// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){
  surveySubmitListener('.survey');
})

function surveySubmitListener(formClass){
  $(formClass).on('submit', function(event){
    event.preventDefault();
    console.log(":D");
  })
}
