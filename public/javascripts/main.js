// TODO: Refactor and organize code into more appropriate functional units. Add commentary.
// TODO: Feature next: color scheme "circles" on message page that change the font and background colors.
$( window ).on( "load", function() {
  let message = $("div#message.flex")[0];
  let tips = [
    "Tip: For longer messages, use landscape.",
    "Tip: Save your voice with Blurts at bars.",
    "Tip: For \"How to use\", tap question mark (top right)."
    ];
  let $tip = $("body > div.container > span.tip");

  setInterval(function () {
    if ($tip.text() === "Tip: For longer messages, use landscape.") {
      $tip.text("Tip: Save your voice with Blurts at bars.");
    } else if ($tip.text() === "Tip: Save your voice with Blurts at bars.") {
      $tip.text("Tip: For \"How to use\", tap question mark.");
    } else if ($tip.text() === "Tip: For \"How to use\", tap question mark.") {
      $tip.text("Tip: For longer messages, use landscape.");
    }
  }, 6000);

  $("body > span").click(function () {
    if (screenfull.enabled) {
      screenfull.request();
      $("body > span").addClass("hide");
      $("body > span.exitFullscreenRequest").removeClass("hide");
    }
  })

  $("body > span.exitFullscreenRequest").click(function () {
    if (screenfull.enabled) {
      screenfull.exit();
      $("body > span").removeClass("hide");
      $("body > span.exitFullscreenRequest").addClass("hide");
    }
  })

  $(".fa-question-circle-o").click(function () {
    $("#about").removeClass("hide");
  })

  $(".fa-times-circle-o").click(function () {
    $("#about").addClass("hide");
  })

  $(".container").click(function () {
    $("input").addClass("message-input");
    $(".validationMessage").addClass("hide");
  })

  $("input").click(function (event) {
    event.stopPropagation();
    $("input").removeClass("message-input");
    $(".validationMessage").removeClass("hide");
  })

  $("input").keyup(function () {
    if ($("input").val().length > 0) {
      $(".button").removeClass("hide");
      $(".validationMessage").removeClass("hide");
    } else if ($("input").val().length === 0) {
      $(".button").addClass("hide");
      $(".validationMessage").addClass("hide");
    }
  });

  $(".button").click(function () {
    $("#messageText").text($("input").val());
    $("#message").removeClass("hide").addClass("flex");
  })

  $("#message").click(function () {
    $("#message").removeClass("flex").addClass("hide");
  })





})
