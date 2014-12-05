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
});

// Plot all points on page to map
function plotAllData() {
  var markers = [];
    $(".accordion-group").each(function(ll) {
        marker = {};
        marker.name = $(this).find("a").text().trim();
        marker.latlng = $(this).find(".latlong").text();
        marker.order = $(this).find(".accordion-body").attr('id');
        markers.push(marker);
    });
  markupMap(markers);
}

function markupMap(data) {
  //sort data array
  data.sort(function(a,b) {return a.order - b.order});
        // console.log(data)
  var minIndex = 0;
  //
  // bomb icon
  var minLong;
  var minLat;
  var minOrder = 4;
  var minMarker;
  //

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

    var name = data[i].name + "<br />";
    marker.bindPopup(name);

    // if the first element in array, zoom to marker
    if (i == 0) {
      marker.openPopup(lat, lng);
      map.setView([lat, lng], 8);
    }
    //
  }
}