// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){
  surveySubmitListener('.survey');
})

function surveySubmitListener(formClass){
  $(formClass).on('submit', function(event){
    event.preventDefault();
    console.log(":D");

    $('#after-survey-questions').animate({
        left: '-50%'
      }, 500);
      // here is where i would animate another container to swoop in, IF I HAD ONE

    var form = $(this);
    var data = form.serialize();

    console.log(data);

    var responderData = form.find('input', 'select').filter('.survey-question').serialize();
    var responseOneData = form.find('input').filter('#reflection-question-one').serialize();
    var responseTwoData = form.find('input').filter('#reflection-question-two').serialize();
    var responseThreeData = form.find('input').filter('#reflection-question-two').serialize();

    console.log(responderData);
    console.log(responseOneData);
    console.log(responseTwoData);
    console.log(responseThreeData);

    var request = $.ajax({
      method: 'POST',
      url: 'http://humanize-api.herokuapp.com/api/v1/companies/1/sessions/1/responders'
      data: responderData
    });

    request.done(function(response){
      console.log(response);
    });

    // var request = $.ajax({
    //   method: 'POST',
    //   url: 'http://humanize-api.herokuapp.com/api/v1/companies/1/sessions/1/responders'
    //   data: responderData;
    // });

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
