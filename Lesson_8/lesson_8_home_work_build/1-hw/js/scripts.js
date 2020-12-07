$(function(){

	let $answers = $('.answer');

	$('.ask').on('click', function(){
		let $currentAnswer = $(this).nextAll('.answer').slideToggle(500);
		$answers.not($currentAnswer).slideUp(500);
	});

});

/*

*/