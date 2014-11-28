var map;

$(document).ready(function() {
  // Create map and add tile layer
  map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('http://{s}.tiles.mapbox.com/v3/gobbledigook.k4k0j8ol/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
  }).addTo(map);

  // Popup Stuff
  var popup = L.popup();
  getLatestData();
});

function getLatestData() {
  var markers = [];
    $(".accordion-group").each(function(ll) {
        marker = {};
        marker.name = $(this).find("a").text().trim();
        marker.latlng = $(this).find(".latlong").text();
        marker.order = $(this).find(".accordion-body").attr('id');
        markers.push(marker);
    });
  //console.log("JSON Data: " + JSON.stringify(data[0].marker.length));
  markupMap(markers);
  // buildTable(data);
}

function markupMap(data) {
  //sort data array
  data.sort(function(a,b) {return a.order - b.order});
        // console.log(data)
  var minIndex = 0;
  //
  // bomb icon
  var bomb_icon = L.icon({
    iconUrl: '/static/img/Bomb.png',

    iconSize:     [30, 30], // size of the icon
    iconAnchor:   L.Point(22, 94), // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -5] // point from which the popup should open relative to the iconAnchor
});

  // on load plot all markers
  for (var i = 0; i < data.length; i++) {
    var latlng = data[i].latlng.split(",");
    var lng = latlng[1];
    var lat = latlng[0];
    var marker = L.marker([lat, lng], {icon: bomb_icon}).addTo(map);

    var name = "Name: " + data[i].name + "<br />";
    marker.bindPopup(name);

    // if the first element in array, zoom to marker
    if (i == 0) {
      marker.openPopup(lat, lng);
      map.setView([lat, lng], 8);
    }
    //
  }

  //on click of Next button, go to next order marker
  $('#nextData').on('click', function() {
    if (data.length > 0 && minIndex < data.length-1) {
      
      minIndex++
      nextIndex = minIndex  
      //find lat and long of next order marker
      var nextlatlng = data[nextIndex].latlng.split(",");
      var nextLng = nextlatlng[1];
      var nextLat = nextlatlng[0];
      var nextMarker = L.marker([nextLat, nextLng],{icon: bomb_icon}).addTo(map);
      //add name 
      var nextName = "Name: " + data[nextIndex].name + "<br />";
      //bind popup
      nextMarker.bindPopup(nextName);
      // open popup 
      nextMarker.openPopup(nextLat, nextLng);  
      //zoom to marker
      map.setView([nextLat, nextLng], 8, {animation:true});  
      //}
    } 
  });

  //on click of Back button, go to last order marker
  $('#backData').on('click', function() {
   if (data.length > 0) {
      minIndex--
      backIndex = minIndex  
      //find lat and long of back order marker
      var backlatlng = data[backIndex].latlng.split(",");
      var backLng = backlatlng[1];
      var backLat = backlatlng[0];
      var backMarker = L.marker([backLat, backLng],{icon: bomb_icon}).addTo(map);
      //add name 
      var backName = "Name: " + data[backIndex].name + "<br />";
      //bind popup
      backMarker.bindPopup(backName);
      //open popup
      backMarker.openPopup(backLat, backLng);
      //zoom to marker
      map.setView([backLat, backLng], 8, {animation: true});
    } 
  });
}

// Toggle Map Size
// Need to be animated... Can perhaps be done through css?
$('.span12, .span10').toggleClass("span10 span12");