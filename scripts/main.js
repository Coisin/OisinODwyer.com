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
  ratio =  initialOpacity - (distanceToTop / totalFadeHeight);

  if(ratio <= 0) {
    $(".overlay").css("pointer-events", "none");
  } else {
    $(".overlay").css("pointer-events", "");
  }
  $(".overlay").css("opacity", ratio);
}
