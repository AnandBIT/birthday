var modal = document.getElementById("popup__box");

displayPopup = function () {
    window.setTimeout(function () {
        modal.style.display = "block";
    }, 100);

};

closePopup = function () {
    modal.style.display = "none";
};

var btn = $(".popup-btn").click(displayPopup);
var closeBox = $(".close__box").click(closePopup);
// modal.style.display = "block";


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};