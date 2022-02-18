"use strict"

import fscreen from "./modules/fscreen/fscreen.esm.js";

let blurtButton = document.querySelector("#blurtButton");

blurtButton.addEventListener("click", function () {
    if (fscreen.fullscreenEnabled) {
        console.log("fullscreen is available");
    }
});