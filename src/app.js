// Step 1. Define the variables for the elements.
let input = document.getElementById("message");
let button = document.getElementById("trigger-button");
let fullscreenContainer = document.getElementById("fullscreen-container");

// Check if Fullscreen API is available
if (document.fullscreenEnabled) {
  // Reveal or hide button based on whether user has typed a message
  message.addEventListener("keyup", function (event) {
    if (event.target.value.length > 0) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", "");
    }
  });

  button.addEventListener("click", function () {
    let blurt = document.getElementById("blurt-message");

    // Display the fullscreen element.
    fullscreenContainer.classList.remove("dn");
    fullscreenContainer.classList.add("flex");

    // Set input value to blurt message
    blurt.textContent = input.value;

    fullscreenContainer.requestFullscreen();
  });

  fullscreenContainer.addEventListener("click", function () {
    // Remove the fullscreen element.
    fullscreenContainer.classList.remove("flex");
    fullscreenContainer.classList.add("dn");

    document.exitFullscreen();
  });
} else {
  // Reveal or hide button based on whether user has typed a message
  message.addEventListener("input", function (event) {
    if (event.target.value.length > 0) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", "");
    }
  });

  button.addEventListener("click", function () {
    let blurt = document.getElementById("blurt-message");

    // Display the off-canvas message container element.
    fullscreenContainer.classList.remove("dn");
    fullscreenContainer.classList.add(
      "flex",
      "vh-100",
      "z-999",
      "overflow-hidden"
    );

    // Set input value to blurt message
    blurt.textContent = input.value;
  });

  fullscreenContainer.addEventListener("click", function () {
    // Remove the off-canvas message container element.
    fullscreenContainer.classList.remove(
      "flex",
      "vh-100",
      "z-999",
      "overflow-hidden"
    );
    fullscreenContainer.classList.add("dn");
  });
}
