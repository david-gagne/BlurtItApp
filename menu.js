window.onload = function () {
    "use strict"

    // Menu functionality
    let menuButton = document.querySelector("body > nav > span.fw7.f4.link.black.avenir.pointer.ttu");
    let menu = document.getElementById("menu");
    let closeButton = document.querySelector("#menu > nav > span");

    menuButton.addEventListener("click", function () {
        menu.classList.replace("dn", "db");
    });

    closeButton.addEventListener("click", function () {
        menu.classList.replace("db", "dn");
    });

}