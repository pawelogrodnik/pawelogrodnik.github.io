$('.nav-btn').click(function() {
    $(this).toggleClass('active');
    $('header nav, header .tel').toggleClass('open');
    $('header').toggleClass('shadow');
    $('header .logo__wrapper').toggleClass('logo-white');
});
$(document).ready(function() {
    $('.slides--wrapper').slick({
        centerMode: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        cssEase: 'linear',
        autoplay: true,
        responsive: [{
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        }]
    })
})