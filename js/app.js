//Analytics JS
document.getElementById('form-submit').addEventListener(
	'click',
	function() {
		fbq('track', 'Lead');
	},
	false
);

// Initialize and add the map
function initMap() {
	// The location of Uluru
	var serocca = { lat: 46.009252, lng: 8.901601 };
	// The map, centered at Uluru
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14.5,
		center: { lat: 46.009013, lng: 8.90946 }
	});
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({ position: serocca, map: map });
}

// waypoints js

var waypoint = new Waypoint({
	element: $('#Descrizione'),
	handler: function(direction) {
		$('.descrizione-box').addClass('descrizione-animated');
	},
	offset: 650
});

var waypoint_ville = new Waypoint({
	element: $('#singole-ville'),
	handler: function(direction) {
		$('.hidden-villa').removeClass('hidden-villa').addClass('animazione-sinistra');
	},
	offset: 650
});

var waypoint_appartamenti = new Waypoint({
	element: $('#singoli-appartamenti'),
	handler: function(direction) {
		$('.hidden-appartamento').removeClass('hidden-appartamento').addClass('animazione-destra');
	},
	offset: 650
});

var waypoint_posizione_1 = new Waypoint({
	element: $('.hidden-posizione-1'),
	handler: function(direction) {
		$('.hidden-posizione-1').removeClass('hidden-posizione-1').addClass('animazione-sinistra');
	},
	offset: 650
});

var waypoint_posizione_2 = new Waypoint({
	element: $('.hidden-posizione-2'),
	handler: function(direction) {
		$('.hidden-posizione-2').removeClass('hidden-posizione-2').addClass('animazione-destra');
	},
	offset: 650
});

var waypoint_posizione_3 = new Waypoint({
	element: $('.hidden-posizione-3'),
	handler: function(direction) {
		$('.hidden-posizione-3').removeClass('hidden-posizione-3').addClass('animazione-sinistra');
	},
	offset: 650
});

var waypoint_posizione_4 = new Waypoint({
	element: $('.hidden-posizione-4'),
	handler: function(direction) {
		$('.hidden-posizione-4').removeClass('hidden-posizione-4').addClass('animazione-destra');
	},
	offset: 650
});
