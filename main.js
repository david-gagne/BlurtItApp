$( document ).ready(function() {
  $( "div.card:nth-child(1)" ).addClass("red");
  $( "div.card:nth-child(2)" ).addClass("purple");
  $( "div.card:nth-child(3)" ).addClass("blue");
  $( "div.card:nth-child(4)" ).addClass("yellow");

// Display "Yo." modal
  $( "div.card:nth-child(1)" ).click(function() {
    $( "div.message" ).toggleClass( "yo" );
    // Write in message
    $( "div.message.yo" ).text("Yo.");
  });
// Hide "Yo." modal
  $( "div.message" ).click(function() {
    $( "div.message.yo" ).toggleClass( "yo" );
    // Remove text
    $( "div.message" ).text("");
  });

  // Display ";-)" modal
    $( "div.card:nth-child(2)" ).click(function() {
      $( "div.message" ).toggleClass( "wink" );
      // Write in message
      $( "div.message.wink" ).text(";-)");
    });
  // Hide ";-)" modal
    $( "div.message" ).click(function() {
      $( "div.message.wink" ).toggleClass( "wink" );
      // Remove text
      $( "div.message" ).text("");
    });

    // Display "Watch this for me?" modal
      $( "div.card:nth-child(3)" ).click(function() {
        $( "div.message" ).toggleClass( "watchThisForMe" );
        // Write in message
        $( "div.message.watchThisForMe" ).text("Watch this for me?");
      });
    // Hide "Watch this for me?" modal
      $( "div.message" ).click(function() {
        $( "div.message.watchThisForMe" ).toggleClass( "watchThisForMe" );
        // Remove text
        $( "div.message" ).text("");
      });

      // Display "Whos that?" modal
        $( "div.card:nth-child(4)" ).click(function() {
          $( "div.message" ).toggleClass( "whosThat" );
          // Write in message
          $( "div.message.whosThat" ).text("Who's that?");
        });
      // Hide "Who's that?" modal
        $( "div.message" ).click(function() {
          $( "div.message.whosThat" ).toggleClass( "whosThat" );
          // Remove text
          $( "div.message" ).text("");
        });



});
