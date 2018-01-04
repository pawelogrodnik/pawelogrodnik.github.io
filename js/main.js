'use strict'

$(document).ready(() => {
	const flipButtons = $('.flip-btn');
	const exitButtons = $('.exit-btn');

	flipButtons.on('click', (e) => {
		console.log(e);
		flipButtons.closest('.content').removeClass('flipped');
		$(e.target).closest('.content').addClass('flipped');
	})
	exitButtons.on('click', (e) => {
		console.log(e);

		$(e.target).closest('.content').removeClass('flipped');
	})

	scrollToAnchor();Z

})
$('.con').on('click', function () {
	const hamburger = $(this);
	hamburger.hasClass('open') ? hamburger.removeClass('open') : hamburger.addClass('open');
	// hamburger.toggleClass('open');
	$('nav').toggle("slide");
});

function scrollToAnchor() {
	$('a.animate[href*="#"]').on('click', function (e) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: $(this.hash).offset().top
			}, 500);
			return false;
		}

	});
}


function initMap() {

    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var styledMapType = new google.maps.StyledMapType(
		[
			{
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#242f3e"
				}
			  ]
			},
			{
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#746855"
				}
			  ]
			},
			{
			  "elementType": "labels.text.stroke",
			  "stylers": [
				{
				  "color": "#242f3e"
				}
			  ]
			},
			{
			  "featureType": "administrative.locality",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#d59563"
				}
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#d59563"
				}
			  ]
			},
			{
			  "featureType": "poi.business",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#263c3f"
				}
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#6b9a76"
				}
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#38414e"
				}
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "geometry.stroke",
			  "stylers": [
				{
				  "color": "#212a37"
				}
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "labels.icon",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#9ca5b3"
				}
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#746855"
				}
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "geometry.stroke",
			  "stylers": [
				{
				  "color": "#1f2835"
				}
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#f3d19c"
				}
			  ]
			},
			{
			  "featureType": "transit",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "featureType": "transit",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#2f3948"
				}
			  ]
			},
			{
			  "featureType": "transit.station",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#d59563"
				}
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#17263c"
				}
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#515c6d"
				}
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "labels.text.stroke",
			  "stylers": [
				{
				  "color": "#17263c"
				}
			  ]
			}
		  ], { name: 'Styled Map' });

    var myLatLng = { lat: 50.0553808, lng: 19.9555685 };

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
        title: 'Ortolingwa',
        icon: {
            url: './../../img/marker.svg',
            scaledSize: new google.maps.Size(64, 64)
        }
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

}