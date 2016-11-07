$(document).on('ready', function(){
  console.log("We're in")

  $('#q1-slider').slider();

  convertToSlider('#q1-slider');
  convertToSlider('#q2-slider');
  convertToSlider('#q3-slider');
})

function convertToSlider(divId){
  $(divId).slider();
}
