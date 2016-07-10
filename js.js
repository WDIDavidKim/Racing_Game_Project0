$(document).ready(function() {

  $("document").width(window);

  $(document).keyup(function(e) {
    if(e.which == 48) { //button 0
      event.preventDefault(e);
      $(".player1").animate({marginLeft: "+=3%"});
      }
    });

  $(document).keyup(function(e) {
    if(e.which == 49) { //button 1
      event.preventDefault(e);
      $(".player2").animate({marginLeft: "+=3%"});
      }
    });







});
