// Nav Bar Stuff
function AdjustHeight() {
    var height = document.getElementById("topbar").offsetHeight;
    document.getElementsByClassName("container")[0].style.marginTop = height + 'px';
}

$(document).ready(
    AdjustHeight()
);

$(window).resize(function() {
    AdjustHeight()
});

// Accordion control

// Forward Button
$('.controls #next').click(function(){
    next()
});

// Back Button
$('.controls #prev').click(function(){
    prev()
});

function next(){
    if($(".accordion-group").find(".in").length != 0) {
      var active_element = $(".accordion-group").find(".in");
      active_element.removeClass("in");
      active_element.parent().next().find(".accordion-body").addClass("in");
  }
    else {
      $(".accordion-group").first().find(".accordion-body").addClass("in");
  }

}

function prev(){
  var active_element = $(".accordion-group").find(".in");
  if(!active_element){
    var active_element = $(".accordion-group")[0].find(".accordion-body");
  }
  active_element.removeClass("in");
  active_element.parent().prev().find(".accordion-body").addClass("in");
}


var interval_id = ''
// Play button
$('.controls #play').click(function() {
    // Toggle Map Size
    // Need to be animated... Can perhaps be done through css?
//    setTimeout($('.col-md-8, .col-md-2').toggleClass("col-md-8 col-md-2"), 4000)
//    $('.col-md-8').removeClass('col-md-8').addClass('col-md-3');
//    $('#events').removeClass('col-md-4').addClass('col-md-9');
    next()
    var timeout = parseInt($('.accordion .in').find(".timerDuration").text()) * 1000;
    interval_id = setInterval(next, timeout);
});

//Stop button
$('.controls #stop').click(function() {
    clearInterval(interval_id);
});

// Helper function to add visible markers to map
function mapCurrentMarkers() {
  if($(".accordion-group").hasClass(".in")) {
  }
  else {
    var markers = [];
    var marker = {};
    marker.name = $('.accordion .in').parent().find("a").text().trim();
    marker.latlng = $('.accordion .in').find(".latlong").text();
    marker.order = $('.accordion .in').attr('id');
    markers.push(marker);
    markupMap(markers);
  };
}

// Observe Accordion
// Plot visible markers on map when accordion is opened
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    mapCurrentMarkers()
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe($('.accordion')[0], {
      subtree: true,
      attributes: true
      //...
});