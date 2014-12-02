
/* affix the navbar after scroll below header */
$('#nav').affix({
      offset: {
        top: $('header').height()-$('#nav').height()
      }
});

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' });

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
});

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top+20;
  $('body,html').animate({scrollTop:posi},700);
});

// Accordion control
$('.controls .btn-primary').click(function(){
  var active_element = $(".accordion-group").find(".in");
  if(!active_element){
    var active_element = $(".accordion-group")[0].find(".accordion-body");
  }
  active_element.removeClass("in");
  active_element.parent().prev().find(".accordion-body").addClass("in");
});

$('.controls .btn-warning').click(function(){
  var active_element = $(".accordion-group").find(".in");
  if($(".accordion-group").find(".in").length != 0) {
      var active_element = $(".accordion-group").find(".in")
      active_element.removeClass("in");
  }
    else {
    var active_element = $(".accordion-group").find(".accordion-body")[0];
  }
  console.log(active_element)
  active_element.parent().next().find(".accordion-body").addClass("in");
});

// Bind click on accordion to event on map
$(".accordion-group .accordion-heading a").on("click",function(){
  if($(this).parent().siblings("div").hasClass("accordion-body in collapse")){
  }else{
    var markers = [];
    var marker = {};
    marker.name = $(this).parent().parent().find("a").text().trim();
    marker.latlng = $(this).parent().parent().find(".latlong").text();
    marker.order = $(this).parent().parent().find(".accordion-body").attr('id');
    markers.push(marker);
    markupMap(markers);
  };
});

// Toggle Map Size
// Need to be animated... Can perhaps be done through css?
$('.span12, .span10').toggleClass("span10 span12");

////on click of Next button, go to next order marker
//$('#nextData').on('click', function() {
//if (data.length > 0 && minIndex < data.length-1) {
//
//  minIndex++
//  nextIndex = minIndex
//  //find lat and long of next order marker
//  var nextlatlng = data[nextIndex].latlng.split(",");
//  var nextLng = nextlatlng[1];
//  var nextLat = nextlatlng[0];
//  var nextMarker = L.marker([nextLat, nextLng],{icon: bomb_icon}).addTo(map);
//  //add name
//  var nextName = "Name: " + data[nextIndex].name + "<br />";
//  //bind popup
//  nextMarker.bindPopup(nextName);
//  // open popup
//  nextMarker.openPopup(nextLat, nextLng);
//  //zoom to marker
//  map.setView([nextLat, nextLng], 8, {animation:true});
//  //}
//}
//});
//
////on click of Back button, go to last order marker
//$('#backData').on('click', function() {
//if (data.length > 0) {
//  minIndex--
//  backIndex = minIndex
//  //find lat and long of back order marker
//  var backlatlng = data[backIndex].latlng.split(",");
//  var backLng = backlatlng[1];
//  var backLat = backlatlng[0];
//  var backMarker = L.marker([backLat, backLng],{icon: bomb_icon}).addTo(map);
//  //add name
//  var backName = "Name: " + data[backIndex].name + "<br />";
//  //bind popup
//  backMarker.bindPopup(backName);
//  //open popup
//  backMarker.openPopup(backLat, backLng);
//  //zoom to marker
//  map.setView([backLat, backLng], 8, {animation: true});
//}
//});