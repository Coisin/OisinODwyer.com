totalFadeHeight = 300; //px
initialOpacity = ratio = .97;

$(function() {

  setOverlayOpacity();

  $(window).scroll(function() {
    setOverlayOpacity();
  });
});

function setOverlayOpacity() {
  var distanceToTop = $(".overlay").offset().top;
  ratio =  initialOpacity - (distanceToTop / totalFadeHeight)
  $(".overlay").css("opacity", ratio);
}
