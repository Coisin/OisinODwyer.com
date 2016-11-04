$(function() {

  var totalFadeHeight = 300; //px
  var initialOpacity = ratio = .97;
  setOverlayOpacity();

  $(window).scroll(function() {
    setOverlayOpacity();
  });
  function setOverlayOpacity() {
    var distanceToTop = $("#overlay").offset().top;
    ratio =  initialOpacity - (distanceToTop / totalFadeHeight)
    $("#overlay").css("opacity", ratio);
  }
});
