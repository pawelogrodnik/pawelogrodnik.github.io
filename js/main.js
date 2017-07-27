$(window).on('load', function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});
$('.nav-btn').click(function() {
    $(this).stop().toggleClass('active');
    $('body').toggleClass('overflow');
    $('header nav, header .tel').toggleClass('open');
    $('header').toggleClass('shadow');
    $('header .logo__wrapper').toggleClass('logo-white');
});

function fakePlaceholders() {
    $('form input[type=text], form input[type=tel], form input[type=email], form textarea').each(function() {
        var el = $(this);
        var elPlaceholder = el.attr('placeholder');
        el.attr('placeholder', '');
        var elID = el.attr('name');
        el.parent().append('<label for="' + elID + '" class="fake-placeholder">' + elPlaceholder + '</label>');
    })
}

function checkInputsContent() {
    $('form input[type=text], form input[type=tel], form input[type=email], form textarea').on("input", function() {
        if (this.value != '') {
            $(this).parent().find('label.fake-placeholder').addClass('fieldFilled');
        } else {
            $(this).parent().find('label.fake-placeholder').removeClass('fieldFilled');
        }

    });
}


$(document).ready(function() {
    fakePlaceholders();
    checkInputsContent();
    var timelineBlocks = $('.cd-timeline-block');

    $(window).on('scroll', function() {
        timelineBlocks.each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
    $('.text-slider').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        cssEase: 'ease-in-out',
        autoplay: true,
        autoplaySpeed: 3000
    })
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

function initMap() {

    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var styledMapType = new google.maps.StyledMapType(
        [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ], { name: 'Styled Map' });

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var myLatLng = { lat: 50.0576778, lng: 19.9564149 };
    // var pointToCheckIfPassed = { lat: 50.0582898, lng: 19.9588669 };
    // var pointToCheckIfPassedre = new google.maps.Polyline({
    //     path: [
    //         new google.maps.LatLng(50.0582898, 19.9588669),
    //         new google.maps.LatLng(50.0582898, 19.9588669)
    //     ],
    //     geodesic: true,
    //     strokeColor: 'red',
    //     strokeOpacity: 1.0,
    //     strokeWeight: 50
    // });
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
    // var directionsService = new google.maps.DirectionsService;
    // var directionsDisplay = new google.maps.DirectionsRenderer;
    // pointToCheckIfPassedre.setMap(map);
    // directionsDisplay.setMap(map);
    // calculateAndDisplayRoute(directionsService, directionsDisplay);

    // function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    //     var isLocationOnEdge = google.maps.geometry.poly.isLocationOnEdge;

    //     directionsService.route({
    //         origin: { lat: 50.0840063, lng: 19.9099942 },
    //         destination: { lat: 50.0575457, lng: 19.9583098 },
    //         travelMode: 'DRIVING'
    //     }, function(response, status) {
    //         console.log(response);
    //         console.log(response.routes[0].legs[0].distance.value + ' ' + response.routes[0].legs[0].distance.text);
    //         console.log(response.routes[0].legs[0].duration.value + ' ' + response.routes[0].legs[0].duration.text);
    //         console.log(response.routes[0].legs[0].start_address);
    //         console.log(response.routes[0].legs[0].end_address);
    //         if (status === 'OK') {
    //             directionsDisplay.setDirections(response);
    //             var pth = new google.maps.LatLng(response.routes[0].overview_path[124].lat(), response.routes[0].overview_path[124].lng());
    //             // var pth = response.routes[0].overview_path[0];
    //             // console.log(pth.lat());
    //             var marker = new google.maps.Marker({
    //                 position: response.routes[0].overview_path[100],
    //                 map: map,
    //                 title: 'WAYPOINT',
    //             });
    //             var currentpos = new google.maps.LatLng();
    //             console.log(google.maps.geometry.poly.isLocationOnEdge(pth, pointToCheckIfPassedre, 0.0001));
    //         } else {
    //             window.alert('Directions request failed due to ' + status);
    //         }
    //     });
    // };



    // var marker = new google.maps.Marker({
    //     position: pointToCheckIfPassed,
    //     map: map,
    //     title: 'Ortolingwa',
    //     icon: {
    //         url: '../img/marker.svg',
    //         scaledSize: new google.maps.Size(64, 64)
    //     }
    // });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Ortolingwa',
        icon: {
            url: '../img/marker.svg',
            scaledSize: new google.maps.Size(64, 64)
        }
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

}