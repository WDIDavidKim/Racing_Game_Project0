$(document).ready(function() {

function player1(){}
  $(document).keyup(function(e) {
    if(e.which == 48) { //button 0
      // event.preventDefault(e);
      $(".player1").css("left", ("+=25px"));
        if ($(".container").width() <= $(".player1").offset().left + $(".player1").outerWidth()) {
          stopMvmt();
      }
      }
    });


function player2(){}
  $(document).keyup(function(e) {
    if(e.which == 49) { //button 1
      // event.preventDefault(e);
      $(".player2").css("left", ("+=25px"));
        if ($(".container").width() <= $(".player2").offset().left + $(".player2").outerWidth()) {
          stopMvmt();
      }
      }

    });
    function stopMvmt() {
      $('.player1').clearQueue();
      $('.player1').stop();
      $('.player2').clearQueue();
      $('.player2').stop();
      $(document).off("keyup");
      }


});
