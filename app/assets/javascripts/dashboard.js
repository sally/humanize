$(document).on('ready', function(){
  // listener for left arrow - AJAX in new data from previous session and replace title and date
  $('.arrow-left').on('click', function(e){
    event.preventDefault();

    var currentUnformattedDate = $('#ee-subtitle-container').text()

    var currentDate = currentUnformattedDate.substring(6,10) + "-" + currentUnformattedDate.substring(0,2) + "-" + currentUnformattedDate.substring(3,5);

    console.log(currentDate);

    request1 = $.ajax({
      method: 'GET',
      url: '/sessioninfo?current_date=' + currentDate
    });

    response1 = request1.done(function(response){
      console.log(response);

      $('#script-container').empty();
      $('#script-container').append(response);

      eval(document.getElementById("highcharts-script").innerHTML);
    });

    request2 = $.ajax({
      method: 'GET',
      url: '/sessionheader?current_date=' + currentDate
    });

    response2 = request2.done(function(response){
      var response_array = response.split("&")
      var title = response_array[0]
      var unformatted_date = response_array[1]
      var date = unformatted_date.substring(5,7) + "-" + unformatted_date.substring(8,10) + "-" + unformatted_date.substring(0,4)
      $('#ee-title-container').text(title);
      $('#ee-subtitle-container').text(date);
      $('.arrow-right').css('color', '#000');
      $('#data-filter')[0].reset();
    })
  });

  // listener for change on any select tag on page - AJAX in new data
  $('.dropdown-filter').on('change', function(){
    var data = $('#data-filter').serialize();

    var request1 = $.ajax({
      method: 'POST',
      url: '/filterdata',
      data: data
    })

    var response1 = request1.done(function(response){
      console.log(response);

      $('#script-container').empty();
      $('#script-container').append(response);

      eval(document.getElementById("highcharts-script").innerHTML);
    })
  })
})
