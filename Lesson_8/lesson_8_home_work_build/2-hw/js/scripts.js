$(function(){

	let $answers = $('.answer');
	$answers.first().show();

	$('.ask').on('click', function(){
		let $currentAnswer = $(this).nextAll('.answer').slideDown(500);
		$answers.not($currentAnswer).slideUp(500);
	});

});