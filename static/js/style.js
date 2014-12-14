$(document).ready(function() {
    $('#pagepiling').pagepiling({
        sectionsColor: ['white', '#ee005a', '#2C3E50', '#39C', 'azure'],
        afterRender: function(){
        setMapView($('.active').find('.map').attr('id'));
        mapCurrentMarker()
        },
        onLeave: function(index, nextIndex, direction){
            if (!$('.active').find('.map').find('.leaflet-map-pane').hasClass('leaflet-map-pane')){
                setMapView($('.active').find('.map').attr('id'));
                mapCurrentMarker()
            }
        }
    });
});

function mapCurrentMarker(){
    var markers = [];
    var marker = {};
    marker.name = $('.active .marker_name').text().trim();
    marker.latlng = $('.active .latlong').text();
    markers.push(marker);
    markupMap(markers);
}

var interval_id = "";
// Play button
$('.controls #play').click(function() {
    interval_id = setInterval($.fn.pagepiling.moveSectionDown, 8000);
});

//Stop button
$('.controls #stop').click(function() {
    clearInterval(interval_id);
});