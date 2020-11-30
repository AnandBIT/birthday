//jshint esversion:6

let x;

$(".popup-btn").click(function (event) {
    x = event.currentTarget.getAttribute("href");
    $(x).addClass("zoomIn");
    $(x).removeClass("zoomOut");
});

$(".close__box").click(function (event) {
    $(x).removeClass("zoomIn");
    $(x).addClass("zoomOut");
});