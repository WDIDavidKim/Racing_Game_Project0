$(document).ready(function() {

player1();
player2();

function player1(){
  $(document).keyup(function(e) {
    if(e.which == 49) { //button 1
      event.preventDefault(e);
      $(".player1").css("left", ("+=40px"));
        if ($(".container").width() <= $(".player1").offset().left + $(".player1").outerWidth()) {
          stop();
          $(".player1Wins").show();
      }
      }
    });
}
function player2(){
  $(document).keyup(function(e) {
    if(e.which == 48) { //button 0
      event.preventDefault(e);
      $(".player2").css("left", ("+=40px"));
        if ($(".container").width() <= $(".player2").offset().left + $(".player2").outerWidth()) {
          stop();
          $(".player2Wins").show();
      }
      }
    });
}
function stop() {
  $('.player1').clearQueue();
  $('.player1').stop();
  $('.player2').clearQueue();
  $('.player2').stop();
  $(document).off("keyup");
}


$("button").click(function(restart){
  stop();
  $(".player2Wins").hide();
  $(".player1Wins").hide();
  player1();
  player2();
  $(".player1").css({'left':'0','opacity':'1'});
  $(".player2").css({'left':'0','opacity':'1'});
    });
});
