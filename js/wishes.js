//jshint esversion:6
displayPopup = function () {
    $("#popup__box").addClass("zoomIn");
    $("#popup__box").removeClass("zoomOut");
};

closePopup = function () {
    $("#popup__box").removeClass("zoomIn");
    $("#popup__box").addClass("zoomOut");
};

var btn = $(".popup-btn").click(function (event) {
    x = event.target.parentNode.parentNode.classList.value;
    if (x === "box-1")
        $(".popup__box-img").attr("src", "img/card1.png");
    else if (x == "box-2")
        $(".popup__box-img").attr("src", "img/card2.png");
    else if (x == "box-3")
        $(".popup__box-img").attr("src", "img/card3.png");
    else if (x == "box-4")
        $(".popup__box-img").attr("src", "img/card4.png");
    else if (x == "box-5")
        $(".popup__box-img").attr("src", "img/card5.png");
    else if (x == "box-6")
        $(".popup__box-img").attr("src", "img/card6.png");
    else if (x == "box-7")
        $(".popup__box-img").attr("src", "img/card7.png");
    else if (x == "box-8")
        $(".popup__box-img").attr("src", "img/card8.png");

    $("#popup__box").addClass("zoomIn");
    $("#popup__box").removeClass("zoomOut");
});


var closeBox = $(".close__box").click(closePopup);

window.onclick = function (event) {
    if (event.target == document.getElementById("popup__box")) {
        $("#popup__box").removeClass("zoomIn");
        $("#popup__box").addClass("zoomOut");
    }
};