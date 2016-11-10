// we're checking to see if the arrow is up or down, then adding or removing the "lift" class accordingly
var arrowBounce = function() {
  var arrow = $(".arrow");

  if (arrow.hasClass("lift")) {
    arrow.removeClass("lift");
  } else {
    arrow.addClass("lift");
  }
};

// run the arrowBounce function every 800ms
setInterval(arrowBounce, 800);

// make arrow disappear on scroll down
$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 10);
  });

$(document).on('ready', function(){
  // smooth scroll for nav links
  smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 2000, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 200, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
  });

  smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 2000, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 200, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
  });

  // animate icons on scroll to fade in / fade up
  $(window).scroll(function(){
    var hT = $('.info-container-one').offset().top,
       hH = $('.info-container-one').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
    if ((wS) > (hT+hH-wH)){
     $('.info-icon-one').removeClass('icon-hidden');
     $('.info-icon-one').addClass('zoomIn');
     $('.info-icon.one').css('color', '#666')
    }
  })

  $(window).scroll(function(){
    var hT = $('.info-container-two').offset().top,
       hH = $('.info-container-two').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
    if ((wS) > (hT+hH-wH)){
     $('.info-icon-two').removeClass('icon-hidden');
     $('.info-icon-two').addClass('zoomIn');
     $('.info-icon.two').css('color', '#666')
    }

    $(window).scroll(function(){
      var hT = $('.info-container-three').offset().top,
         hH = $('.info-container-three').outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();
      console.log((hT-wH) , wS);
      if ((wS) > (hT+hH-wH)){
       $('.info-icon-three').removeClass('icon-hidden');
       $('.info-icon-three').addClass('zoomIn');
       $('.info-icon.three').css('color', '#666')
      }
    })
  })

})
