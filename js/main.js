$(document).ready(function () {
	'use strict';
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
						"hue": "#fff"
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
						"color": "#333"
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


	var myLatLng = { lat: 50.1287436, lng: 19.7972589 };

	var map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 14,
		scrollwheel: false,
		mapTypeControl: false,
		// disableDefaultUI: true,
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