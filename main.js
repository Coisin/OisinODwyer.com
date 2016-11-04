$(function() {

  var totalFadeHeight = 300; //px
  var initialOpacity = ratio = .97;

  $("#overlay").css("opacity", initialOpacity);

  $(window).scroll(function() {
    var distanceToTop = $("#overlay").offset().top;
    ratio =  initialOpacity - (distanceToTop / totalFadeHeight);
    $("#overlay").css("opacity", ratio);
  });
});
