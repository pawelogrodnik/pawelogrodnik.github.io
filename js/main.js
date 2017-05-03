$(document).ready(function(){
 //    menuBackgroundColor();
	// $(window).scroll(menuBackgroundColor);
    toTheTop();
    $(window).scroll(toTheTop);

    $(function() {
        $('nav .menu-main-menu-container>ul').slicknav({
            label: '',
            appendTo: 'header .container'
        });
    });

    // function menuBackgroundColor() {
    //     var a = $(window).scrollTop();
    //     if (a >= 0) {
    //         if (a < 100) {
    //             $("header").css({
    //                 "background": "rgba(255, 255, 255," + a / 100 + ")"
    //             });
    //         } else {
    //             $("header").css({
    //                 "background": "rgba(255, 255, 255, 1.0)"
    //             });
    //         }
    //     }
    // }
    function toTheTop() {
        var offset = $(window).scrollTop();
        var windowheight = $(window).height();
        if (offset >= windowheight + 300) {
            $(".arrow-up").css("display","block");
        }
        else {
             $(".arrow-up").css("display","none");
        }
    }

    $('.quotes-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        // fade: true,
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

    if (getCookie("cookieInfo") == "agreed") {
      document.getElementById("cookieInfo").style.display = "none";
    }
    var el = document.getElementById("cookieBtn");
    el.addEventListener("click", function() {
      setCookie("cookieInfo", "agreed", 360);
      document.getElementById("cookieInfo").style.display = "none";
    })

})


function setCookie(cookieName, cookieValue, expireDays) {
  var date = new Date();
  date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function initMap() {

    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var styledMapType = new google.maps.StyledMapType(
        [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#ebe3cd"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#523735"
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#f5f1e6"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#c9b2a6"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#dcd2be"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ae9e90"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dfd2ae"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dfd2ae"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#93817c"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#a5b076"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#447530"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f1e6"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#fdfcf8"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f8c967"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#e9bc62"
            }]
        }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e98d58"
            }]
        }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#db8555"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#806b63"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dfd2ae"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#8f7d77"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ebe3cd"
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dfd2ae"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#b9d3c2"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#92998d"
            }]
        }], { name: 'Styled Map' });

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var myLatLng = { lat: 50.0576778, lng: 19.9564149 };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 14,
        scrollwheel: false,
        mapTypeControl: false,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map'
            ]
        }
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Specjalistyczne Centrum Chirurgii Ogólnej i Onkologicznej'
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

}
if ($('body').hasClass('o-mnie')) {
     $('.certyfikaty').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.certyfikaty--nav'
    });
    $('.certyfikaty--nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.certyfikaty',
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1
          }
        }
      ]
    });
}