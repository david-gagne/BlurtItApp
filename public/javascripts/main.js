$( window ).on( "load", function() {

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

  $("input").keydown(function () {
    if ($("input").val() === "") {
      $(".button").addClass("hide");
    } else if ($("input").val() !== "") {
      $(".button").removeClass("hide");
    }
  });

  $(".button").click(function () {
    $("#message").text($("input").val());
    $("#message").removeClass("hide").addClass("flex");
  })

  $("#message").click(function () {
    $("#message").removeClass("flex").addClass("hide");
  })

})
