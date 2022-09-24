// Check if Fullscreen API is available
if (document.fullscreenEnabled) {
  // Step 1. Define the variables for the elements.
  let input = document.getElementById("message");
  let button = document.getElementById("trigger-button");
  let fullscreenContainer = document.getElementById("fullscreen-container");

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
  // let body = document.querySelector("body");
  // let unsupportedMessage = document.getElementById(
  //   "unsupported-message-container"
  // );
  // body.classList.add("overflow-hidden");
  // unsupportedMessage.classList.replace("dn", "flex");
}
