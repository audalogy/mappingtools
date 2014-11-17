var SEED_DATA =
    [
        {
        'event_name': 'The Blitz',
        'event_type': 'Historical',
        'created_by': 'Vijay',
        'created_at': '11-12-2014 21:00:00',
        'updated_by': 'Vijay',
        'updated_at': '11-13-2014 09:00:00',
        'marker':
            [
                {
                    'marker_name': 'First hit of the night to Royal Arsenal ',
                    'marker_type': 'Blue Pin',
                    'marker_order': 1,
                    'marker_description': '(Owned by H.M War Department) E.50 A building of 2 floors about 300x200 used as workrooms, machine rooms office and store damaged by explosion',
                    'latitude': '54.5608864',
                    'longitude': '-2.2125118',
                    'include_modern_map': 'True',
                    'people': [],
                    'date':
                        {
                            'date_type': 'datetime',
                            'start_date': '09-07-1940 14:55:00',
                            'end_date': ''
                        },
                    'image':
                        {
                            'file_name': '',
                            'caption': ''
                        },
                    'audio':
                        {
                            'file_name': '',
                            'caption': ''
                        }
                },
                {
                    'marker_name': 'Last bomb on the first night of the blitz',
                    'marker_type': 'Blue Pin',
                    'marker_order': 3,
                    'marker_description': '57 buildings damaged by explosion. 4 persons severely injured, extricated by the Brigade and removed to hospital.',
                    'latitude': '51.51396',
                    'longitude': '-0.003383',
                    'include_modern_map': 'True',
                    'people': [],
                    'date':
                        {
                            'date_type': 'datetime range',
                            'start_date': '09-07-1940 23:59:00',
                            'end_date': '09-07-1940 24:00:00'
                        },
                    'image':
                        {
                            'file_name': '',
                            'caption': ''
                        },
                    'audio':
                        {
                            'file_name': '',
                            'caption': ''
                        }
                },
                {
                   'marker_name': 'BBC Braodcasting House',
                   'marker_type': 'Blue Pin',
                   'marker_order': 2,
                   'marker_description': 'The BBC Broadcasting House was bombed during an evening broadcast. Radio announcer Bruce Belfrage, paused briefly as the bomb went off and then continued reading the evening news. This was one of several direct hits to the building during the Blitz.',
                   'latitude': '51.518571',
                   'longitude': '-0.143811',
                   'include_modern_map': 'True',
                   'people': ['Bruce Belfrage'],
                   'date':
                       {
                           'date_type': 'datetime',
                           'start_date': '10-14-1940 20:00:00',
                           'end_date': ''
                       },
                   'image':
                       {
                           'file_name': '',
                           'caption': ''
                       },
                   'audio':
                       {
                           'file_name': '',
                           'caption': ''
                       }
                }
            ]
        }
    ]
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
})

function getLatestData() {
  var data = SEED_DATA;
  //console.log("JSON Data: " + JSON.stringify(data[0].marker.length));
  markupMap(data);
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
  for (var i = 0; i < data[0].marker.length; i++) {
    var lng = data[0].marker[i].longitude;
    var lat = data[0].marker[i].latitude;
    var marker = L.marker([lat, lng], {icon: bomb_icon}).addTo(map);

    var name = "Name: " + data[0].marker[i].marker_name + "<br />";
    var start = "Start: " + new Date(data[0].marker[i].date.start_date).toLocaleString() + "<br />";
    var end = "End: " + new Date(data[0].marker[i].date.end_date).toLocaleString() + "<br />";
    var info = name + "<br />" + start + "<br />" + end + "<br />";
    marker.bindPopup(info);
    //
    if(data[0].marker[i].marker_order < minOrder) {
      minLong = lng;
      minLat = lat;
      minOrder = data[0].marker[i].marker_order;
      minMarker = marker;
      }
  }
  minMarker.openPopup();
  map.setView([minLat, minLong], 8);
}

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

