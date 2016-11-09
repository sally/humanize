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
        $('.survey-container').replaceWith("<div id='tips-header'><p><h1 id='helpful-tip'>Helpful Tips for EQ Sessions</h1></p></div><br><div id='ask-container'><p id='ASK'>ASK Feedback</p><div id='ee-description'><ul id='ask-list'><li>Actionable: tell your partner what was done well and what could be better in the future.</li><li>Specific: help your partner by giving them a specific way to improve rather than a blanket statement.</li><li>Kind: getting feedback is hard. Remember to communicate in a way that is gentle and kind.</li><li>'I feel _____ when you _____.'</li></ul></div></div><img src='h-bot-friends.png' id='bot-friends'><div id='listening-container'><p id='active-listening'>Active Listening</p><div id='listening-container'><ul id='listening-list'><li>Look at the speaker directly.</li><li>Put aside distracting thoughts.</li><li>Maintain an open and inviting posture.</li><li>Reflect back to the speaker what you heard before going into your response.</li></ul></div></div>")
        }
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
