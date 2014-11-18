
$(function() {
    var pathname = window.location.pathname;
    var id = pathname.split("/")[2];
    $.ajax({dataType: "json", url: "http://127.0.0.1:5000/data/"+id, success: function (result) {
        console.log(result)
        $.each(result.marker, function(j, marker) {
            $("#events").html(marker.marker_name);
        })
    }});
});