$("#popup__box").toggle();

displayPopup = function () {
    $("#popup__box").fadeIn();
};

closePopup = function () {
    $("#popup__box").fadeOut();
};

var btn = $(".popup-btn").click(displayPopup);
var closeBox = $(".close__box").click(closePopup);

window.onclick = function (event) {
    if (event.target == document.getElementById("popup__box")) {
        $("#popup__box").fadeOut();
    }
};