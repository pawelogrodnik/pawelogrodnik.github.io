'use strict';

$(document).ready(function () {
	var elem = $('.intro-section__image--single');
	elem.on('click', function (e) {
		e.preventDefault();
		var id = $(this).data('tab');
		$('.intro-section__sliding-desc >div').slideUp(700).promise().then(function () {
			$('#' + id).slideDown(700);
		});
	});
});