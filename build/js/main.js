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
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#f5f5f5"
				}
			  ]
			},
			{
			  "elementType": "labels.icon",
			  "stylers": [
				{
				  "visibility": "off"
				}
			  ]
			},
			{
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#616161"
				}
			  ]
			},
			{
			  "elementType": "labels.text.stroke",
			  "stylers": [
				{
				  "color": "#f5f5f5"
				}
			  ]
			},
			{
			  "featureType": "administrative.land_parcel",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#bdbdbd"
				}
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#eeeeee"
				}
			  ]
			},
			{
			  "featureType": "poi",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#757575"
				}
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#e5e5e5"
				}
			  ]
			},
			{
			  "featureType": "poi.park",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#9e9e9e"
				}
			  ]
			},
			{
			  "featureType": "road",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#ffffff"
				}
			  ]
			},
			{
			  "featureType": "road.arterial",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#757575"
				}
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#dadada"
				}
			  ]
			},
			{
			  "featureType": "road.highway",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#616161"
				}
			  ]
			},
			{
			  "featureType": "road.local",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#9e9e9e"
				}
			  ]
			},
			{
			  "featureType": "transit.line",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#e5e5e5"
				}
			  ]
			},
			{
			  "featureType": "transit.station",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#eeeeee"
				}
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "geometry",
			  "stylers": [
				{
				  "color": "#c9c9c9"
				}
			  ]
			},
			{
			  "featureType": "water",
			  "elementType": "labels.text.fill",
			  "stylers": [
				{
				  "color": "#9e9e9e"
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