window.addEventListener('load', function(){

	/* №1 homework - i testavorum */

	let check = $('.checkbox');

	console.log(check.prop('checked')); // false
	check.prop('checked', true); // browser - um ptichkan kdrvi
	console.log(check.prop('checked')); // true
	check.prop('checked', false); // browser - um ptichkan khanvi

	/* №2 homework - i testavorum */

	let items = $('.items .item');

	items.css('color', 'white'); // petq e spitaken
	console.log(items.css('color')); // red

	/* petq e katarven bolor style - er@ */
	items.css({
		display: 'inline-block',
		background: '#f90',
		cursor: 'pointer',
		padding: '10px'
	});

});