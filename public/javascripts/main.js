$( window ).on( "load", function() {

  $(".fa-question-circle-o").click(function () {
    $("#about").removeClass("hide");
  })

  $(".fa-times-circle-o").click(function () {
    $("#about").addClass("hide");
  })

  $(".message-input").keydown(function () {
    if ($(".message-input").val() === "") {
      $(".button").addClass("hide");
    } else if ($(".message-input").val() !== "") {
      $(".button").removeClass("hide");
    }
  });

  $(".button").click(function () {
    $("#message").text($(".message-input").val());
    $("#message").removeClass("hide").addClass("flex");
  })

  $("#message").click(function () {
    $("#message").removeClass("flex").addClass("hide");
  })

})
