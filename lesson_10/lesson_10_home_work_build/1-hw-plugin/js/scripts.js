$(function(){

	$('.item').duplicate({
		cnt: 3,
		del: '-'
	}).css('color', '#f90');

	$('.some').duplicate({
		cnt: 2,
		del: '_'
	});

});