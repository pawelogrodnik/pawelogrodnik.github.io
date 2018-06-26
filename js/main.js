$(document).ready(function() {
	const elem = $('.intro-section__image--single')
	elem.on('click', function(e) {
		e.preventDefault();
		const id = $(this).data('tab');
		$('.intro-section__sliding-desc >div').slideUp(700).promise().then(function(){
			$(`#${id}`).slideDown(700);

		});
	})
});