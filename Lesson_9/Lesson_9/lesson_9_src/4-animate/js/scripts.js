$(function(){

	let $answers = $('.answer');

	$('.ask').on('click', function(){
		let $currentAnswer = $(this).nextAll('.answer').slideDown(500);
		$answers.not($currentAnswer).slideUp(500);
	});

	$('.answer').on('click', function(){
		$(this).animate({
			opacity: '-=0.1',
			marginLeft: '+=50'
		}, 1000);
	});

	// animate(object props, int duration, string easing, function callback)

});