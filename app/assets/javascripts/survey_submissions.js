// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){
  surveySubmitListener('.survey');
})

function surveySubmitListener(formClass){
  $(formClass).on('submit', function(event){
    event.preventDefault();

    $('#after-survey-questions').animate({
        left: '-50%'
      }, 500);
      // here is where i would animate another container to swoop in, IF I HAD ONE

    // *** disable ajax request to make new objects in db for preso ***
    var form = $(this);
    var data = form.serialize();

    var responderData = form.find('input', 'select').filter('.survey-question').serialize();
    var responseOneData = form.find('input').filter('#reflection-question-one').serialize();
    var responseTwoData = form.find('input').filter('#reflection-question-two').serialize();
    var responseThreeData = form.find('input').filter('#reflection-question-three').serialize();

    var responseOneData = responseOneData + "&%5Bresponse%5Dquestion_id=1"
    var responseTwoData = responseTwoData + "&%5Bresponse%5Dquestion_id=2"
    var responseThreeData = responseThreeData + "&%5Bresponse%5Dquestion_id=3"

    var request = $.ajax({
      method: 'POST',
      url: 'http://humanize-api.herokuapp.com/api/v1/companies/1/sessions/1/responders',
      data: responderData
    });

    var response = request.done(function(response){
      var responderId = response.id;
      var responderBefore = response.before;

      // Do nested AJAX call to make Response objects out of Responder ID
      var request1 = $.ajax({
        method: 'POST',
        url: 'http://humanize-api.herokuapp.com/api/v1/companies/1/sessions/1/responses',
        data: responseOneData + "&%5Bresponse%5Dresponder_id=" + responderId
      });

      response1 = request1.done(function(response){ });

      var request2 = $.ajax({
        method: 'POST',
        url: 'http://humanize-api.herokuapp.com/api/v1/companies/1/sessions/1/responses',
        data: responseTwoData + "&%5Bresponse%5Dresponder_id=" + responderId
      });

      response2 = request2.done(function(response){ });

      var request3 = $.ajax({
        method: 'POST',
        url: 'http://humanize-api.herokuapp.com/api/v1/companies/1/sessions/1/responses',
        data: responseThreeData + "&%5Bresponse%5Dresponder_id=" + responderId
      });

      response3 = request3.done(function(response){ });

      /* Depending on whether the survey was before or after EE session, inject the appropriate page */
      if(responderBefore){
        $.ajax({
          method: 'GET',
          url: '/tips'
        })
        .done(function(response){
          $('.survey-container').replaceWith(response);
        })}
      else{
        $.ajax({
          method: 'GET',
          url: '/thankyou'
        })
        .done(function(response){
          $('.survey-container').replaceWith(response);
        })
      }
    });

    // *** for demo purposes, just load tips or thank you page depending on the value of input[name='[responder]before'] ***

    // var responderType = JSON.parse($("input[name='responder[before]']").val());
    //
    // if (responderType){
    //   $.ajax({
    //     method: 'GET',
    //     url: '/tips'
    //   })
    //   .done(function(response){
    //     $('.survey-container').replaceWith(response);
    //   })
    // }
    // else{
    //   $.ajax({
    //     method: 'GET',
    //     url: '/thankyou'
    //   })
    //   .done(function(response){
    //     $('.survey-container').replaceWith(response);
    //   })
    // };



    // *** prehistoric version of survey where we were actually redirecting after a delay ***
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
