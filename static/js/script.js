var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/gobbledigook.k4k0j8ol/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("<p>You clicked the map at  <span id='coord'>" + e.latlng.toString() + " </span></p><button id='save'>Add Entry Here</button>")
        .openOn(map);
}

map.on('click', onMapClick);

function addNewEntry(coord){
    $('#events').append("<p>"+coord+"</p>");
    $('#events').append("<input type='text' placeholder='Event Name'></input>");
}

// The HTML we put in bindPopup doesn't exist yet, so we can't just say
// $('#mybutton'). Instead, we listen for click events on the map element which
// will bubble up from the tooltip, once it's created and someone clicks on it.
$('#map').on('click', '#save', function() {
    addNewEntry($('#coord').text());
});
