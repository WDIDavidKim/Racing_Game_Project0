$(document).ready(function() {

  $(".container").width(window);

  $(document).keyup(function(e) {
    if(e.which == 48) { //button 0
      $(".player1").css({marginLeft: "+=3%"});
      }
    });

  $(document).keyup(function(e) {
    if(e.which == 49) { //button 1
      $(".player2").css({marginLeft: "+=3%"});
      }
    });







});
