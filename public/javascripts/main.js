// TODO: Refactor and organize code into more appropriate functional units. Add commentary.
// TODO: Feature next: color scheme "circles" on message page that change the font and background colors.
$( window ).on( "load", function() {
  let message = $("div#message.flex")[0];
  let tipText = [
    "Pro Tip: Safari iOS users, view message in landscape for fullscreen.",
    "Pro Tip: Tap the question mark icon for more information.",
    "Pro Tip: For longer messages, use landscape.",
    "Pro Tip: BlurtItApp to \"Pass\" notes.",
  ]

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
