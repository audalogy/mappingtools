// Nav Bar Stuff
function AdjustHeight() {
    var height = document.getElementById("topbar").offsetHeight;
    document.getElementsByClassName("container")[0].style.marginTop = height + 'px';
}

$(document).ready(
    AdjustHeight()
);

$(window).resize(function() {
    AdjustHeight()
});