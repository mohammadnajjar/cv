$(document).ready(function() {
	
	$('.card').delay(1800).queue(function(next) {
		$(this).removeClass('hover');
		next();
	});
});
$(function () {
  //calculate slider Height
  var winH = $(window).height(),
    upperH = $(".upper-bar").innerHeight(),
    navH = $(".navbar").innerHeight();
  var ds = winH - (upperH + navH);
  $(".slider, .carousel-item").height(winH - (upperH + navH));
  console.log(ds);

  $(".carousel").carousel({
    interval: 6000,
  });
});


