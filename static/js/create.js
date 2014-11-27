
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