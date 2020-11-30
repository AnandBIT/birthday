displayPopup = function () {
    $("#popup__box").addClass("zoomIn");
    $("#popup__box").removeClass("zoomOut");
};

closePopup = function () {
    $("#popup__box").removeClass("zoomIn");
    $("#popup__box").addClass("zoomOut");
};

var btn = $(".popup-btn").click(displayPopup);
var closeBox = $(".close__box").click(closePopup);

window.onclick = function (event) {
    if (event.target == document.getElementById("popup__box")) {
        $("#popup__box").removeClass("zoomIn");
        $("#popup__box").addClass("zoomOut");
    }
};