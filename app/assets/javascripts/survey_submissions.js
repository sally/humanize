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
        $('.survey-container').replaceWith("<img id='thankyou-image' src='<%= 'assets/h-bot-love.png' %>'><div id='thankyou-main'><div><h1>Thank you!</h1></div><div id='thankyou-content'><p>Here at Humanize, we believe in real moments that connect us to other people. We hope you feel the same.</p><p>If you've enjoyed your team's Humanize sessions and believe other would benefit, please help us spread the word!</p><p>Use Humanize to find a new point of view. Because human people are better people.</p></div></div>");
      }
    });

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
