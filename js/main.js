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