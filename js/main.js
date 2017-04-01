$(window).scroll(menuBackgroundColor);
	
$(function(){
	$('nav>ul').slicknav({
		label: '',
		appendTo: 'header .container'
	});
});

function menuBackgroundColor() {
    var a = $(window).scrollTop();
    if (a >= 0) {
        if (a < 100) {
            $("header").css({
                "background": "rgba(255, 255, 255," + a / 100 + ")"
            });
        } else {
            $("header").css({
                "background": "rgba(255, 255, 255, 1.0)"
            });
        }
    }
}

$('.slides--wrapper').slick({
  dots: true,
  infinite: true,
  speed: 2000,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  nextArrow: '<button type="button" class="slick-next"></button>',
  prevArrow: '<button type="button" class="slick-prev"></button>'
});

$('.arrow-up').on('click', function() {
  $('body').animate({
    scrollTop: 0
  }, 700);
});