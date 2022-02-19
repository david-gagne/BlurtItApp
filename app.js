"use strict"

import fscreen from "./modules/fscreen/fscreen.esm.js";

let blurtButton = document.querySelector("#blurtButton");
let blurt = document.getElementById("blurt");
let message = document.getElementById("message");
let appContainer = document.getElementById("appContainer");

message.addEventListener("keyup", function () {
    if (message.value.length > 0) {
        blurtButton.classList.remove("dn");
    } else {
        blurtButton.classList.add("dn");
    }
});

blurtButton.addEventListener("click", function () {
    if (fscreen.fullscreenEnabled) {
        blurt.textContent = message.value;
        appContainer.classList.replace("dn", "db");

        return fscreen.requestFullscreen(appContainer);
    } else {
        alert("Full screen is not supported");
    }
});

blurtButton.addEventListener("click", function () {
    if (fscreen.fullscreenEnabled) {
        blurt.textContent = message.value;
        appContainer.classList.replace("dn", "db");

        return fscreen.requestFullscreen(appContainer);
    } else {
        alert("Full screen is not supported");
    }
});

appContainer.addEventListener("click", function () {
    fscreen.exitFullscreen();
    appContainer.classList.replace("db", "dn");
});