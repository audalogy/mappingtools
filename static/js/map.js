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
//  minMarker.openPopup();
//  map.setView([minLat, minLong], 8);
}

// Toggle Map Size
// Need to be animated... Can perhaps be done through css?
$('.span12, .span10').toggleClass("span10 span12")

/*
function buildTable(data) {
    for (var i = 0; i < data.features.length; i++) {
        // var lat = data.features[i].geometry.coordinates[1];
        // var lng = data.features[i].geometry.coordinates[0];
        var record = $("<tr></tr>")
            .append("<td>" + data.features[i].properties.place + "</td>")
            .append("<td>" + new Date(data.features[i].properties.time).toLocaleString() + "</td>")
            .append("<td>" + data.features[i].properties.mag + "</td>")
            .append("<td>" + data.features[i].geometry.coordinates[2] + " km</td>")
            // .append("<td class=lat>" + lat + "</td>")
            // .append("<td class=lat>" + lng + "</td>")
            .append("<td>" + nullChecker(data.features[i].properties.felt) + "</td>")
            .append("<td>" + nullChecker(data.features[i].properties.alert) + "</td>")
            .append("<td>" + nullChecker(data.features[i].properties.tsunami) + "</td>")
        $(".table").append(record);
    }
}



function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("<p>You clicked the map at  <span id='coord'>" + [e.latlng.lat,e.latlng.lng] + "</span></p><button id='save'>Add Entry Here</button>")
        .openOn(map);
}

map.on('click', onMapClick);

// Add new entries
function addNewEntry(coord){
     $('#events').append("<tr>\
        <td id='coord' class='hide'>" + coord +"</td>\
        <td><input type='text' placeholder='Event Name'></input></td>\
        <td><input type='text' placeholder='Date'></input></td>\
    </tr>");
}

// The HTML we put in bindPopup doesn't exist yet, so we can't just say
// $('#mybutton'). Instead, we listen for click events on the map element which
// will bubble up from the tooltip, once it's created and someone clicks on it.
$('#map').on('click', '#save', function() {
    addNewEntry($('#coord').text());
});

function addMarkerstoMap(){
    $('[id="coord"]').each(function() {
        var mrkr = L.marker([$(this).text().split(",")[0],$(this).text().split(",")[1]]).addTo(map);
        mrkr.bindPopup("<b>Hello world!</b><br />I am a popup.")
    });
}

*/

