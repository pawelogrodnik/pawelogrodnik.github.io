'use strict';

$(document).ready(function () {
	var flipButtons = $('.flip-btn');
	var exitButtons = $('.exit-btn');

	flipButtons.on('click', function (e) {
		console.log(e);
		flipButtons.closest('.content').removeClass('flipped');
		$(e.target).closest('.content').addClass('flipped');
	});
	exitButtons.on('click', function (e) {
		console.log(e);

		$(e.target).closest('.content').removeClass('flipped');
	});
});
$('.con').on('click', function () {
	var hamburger = $(this);
	hamburger.hasClass('open') ? hamburger.removeClass('open') : hamburger.addClass('open');
	// hamburger.toggleClass('open');
	$('nav').toggle("slide");
});