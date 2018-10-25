$(document).ready(function () {
	'use strict';
	$('a[href^="#"]').click(function (event) {
		event.preventDefault();
		var href = $.attr(this, 'href');
		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, 500, function () {
			window.location.hash = href;
		});

		return false;
	});
	$(".our-offer--slider").slick({
		autoplay: true,
		arrows: true,
		dots: true,
		infinite: true,
		autoplaySpeed: 5000,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				slidesToShow: 1
			  }
			},
		]
	});

	$('.our-offer--slider').slickLightbox({
		src: 'src',
		itemSelector: '.our-offer__slide img'
	});
	initMap()
});

function initMap() {
	'use strict';
	// Create a new StyledMapType object, passing it an array of styles,
	// and the name to be displayed on the map type control.
	var styledMapType = new google.maps.StyledMapType(
		[
			{
				"stylers": [
					{
						"hue": "#baf4c4"
					},
					{
						"saturation": 10
					}
				]
			},
			{
				"featureType": "water",
				"stylers": [
					{
						"color": "#effefd"
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			}
		], { name: 'Styled Map' });


	var myLatLng = { lat: 50.0892039, lng: 19.8972737 };

	var map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 14,
		scrollwheel: false,
		mapTypeControl: false,
		disableDefaultUI: true,
		mapTypeControlOptions: {
			mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
				'styled_map'
			]
		}
	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map
	});

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');

}