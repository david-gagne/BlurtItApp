$( document ).ready(function() {
  $( "div.card:nth-child(1)" ).addClass("red");
  $( "div.card:nth-child(2)" ).addClass("purple");
  $( "div.card:nth-child(3)" ).addClass("blue");
  $( "div.card:nth-child(4)" ).addClass("yellow");

  $( "body > div.jumbotron.jumbotron-fluid > i" ).click(function () {
    // display about modal
    $( "div.message" ).toggleClass("about");
    $( "body" ).toggleClass("noScroll"); // overflow: hidden
    $("html").scrollTop( 0 ); // set the window (html) element to the topmost position
    $( "div.container" ).toggleClass("hide"); // hide container element
    // text content
    $("div.message.about").text("BlurtIt App was made out of love [and boredom] by @buildpax");
  });

  // hide about modal
  $( "div.message" ).click(function () {
    $("div.message.about").toggleClass("about");
    $( "div.container" ).toggleClass("hide"); // show container element
  });



// Display "Yo." modal
  $( "div.card:nth-child(1)" ).click(function() {
    $( "div.message" ).toggleClass( "yo" );
    $( "body" ).toggleClass("noScroll"); // overflow: hidden
    $("html").scrollTop( 0 ); // set the window (html) element to the topmost position
    $( "div.container" ).toggleClass("hide"); // hide container element
    // Write in message
    $( "div.message.yo" ).text("Yo.");
  });
// Hide "Yo." modal
  $( "div.message" ).click(function() {
    $( "div.message.yo" ).toggleClass( "yo" );
    $( "div.container" ).toggleClass("hide"); // show container element
    // Remove text
    $( "div.message" ).text("");
  });

  // Display ";-)" modal
    $( "div.card:nth-child(2)" ).click(function() {
      $( "div.message" ).toggleClass( "wink" );
      $( "body" ).toggleClass("noScroll"); // overflow: hidden
      $("html").scrollTop( 0 ); // set the window (html) element to the topmost position
      $( "div.container" ).toggleClass("hide"); // hide container element
      // Write in message
      $( "div.message.wink" ).text(";-)");
    });
  // Hide ";-)" modal
    $( "div.message" ).click(function() {
      $( "div.message.wink" ).toggleClass( "wink" );
      $( "div.container" ).toggleClass("hide"); // show container element
      // Remove text
      $( "div.message" ).text("");
    });

    // Display "Watch this for me?" modal
      $( "div.card:nth-child(3)" ).click(function() {
        $( "div.message" ).toggleClass( "watchThisForMe" );
        $( "body" ).toggleClass("noScroll"); // overflow: hidden
        $("html").scrollTop( 0 ); // set the window (html) element to the topmost position
        $( "div.container" ).toggleClass("hide"); // hide container element
        // Write in message
        $( "div.message.watchThisForMe" ).text("Watch this for me?");
      });
    // Hide "Watch this for me?" modal
      $( "div.message" ).click(function() {
        $( "div.message.watchThisForMe" ).toggleClass( "watchThisForMe" );
        $( "div.container" ).toggleClass("hide"); // show container element
        // Remove text
        $( "div.message" ).text("");
      });

      // Display "Whos that?" modal
        $( "div.card:nth-child(4)" ).click(function() {
          $( "div.message" ).toggleClass( "whosThat" );
          $( "body" ).toggleClass("noScroll"); // overflow: hidden
          $("html").scrollTop( 0 ); // set the window (html) element to the topmost position
          $( "div.container" ).toggleClass("hide"); // hide container element
          // Write in message
          $( "div.message.whosThat" ).text("Who's that?");
        });
      // Hide "Who's that?" modal
        $( "div.message" ).click(function() {
          $( "div.message.whosThat" ).toggleClass( "whosThat" );
          $( "body" ).toggleClass("noScroll"); // overflow: hidden
          $( "div.container" ).toggleClass("hide"); // show container element
          // Remove text
          $( "div.message" ).text("");
        });



});
