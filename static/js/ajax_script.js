
$(function() {
    var pathname = window.location.pathname;
    var id = pathname.split("/")[2];
    $.ajax({url: "http://127.0.0.1:5000/data/"+id, success: function (result) {
        $("#events").html(result);
    }});
});