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
  var minLong;
  var minLat;
  var minOrder = 4;
  var minMarker;
  //
  //
  var bomb_icon = L.icon({
    iconUrl: '/static/img/Bomb.png',

    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
  //
  for (var i = 0; i < data.length; i++) {
    var latlng = data[i].latlng.split(",");
    var lng = latlng[1];
    var lat = latlng[0];
    var marker = L.marker([lat, lng], {icon: bomb_icon}).addTo(map);

    var name = "Name: " + data[i].name + "<br />";
    marker.bindPopup(name);
    //
    if(data[i].order < minOrder) {
      minLong = lng;
      minLat = lat;
      minOrder = data[i].order;
      minMarker = marker;
      }
  }
  minMarker.openPopup();
  map.setView([minLat, minLong], 8);
}

// Toggle Map Size
// Need to be animated... Can perhaps be done through css?
$('.span12, .span10').toggleClass("span10 span12");