$(function(){
	
	let $links = $('.menu a');
	
	$links.on('click', function(e){
		e.preventDefault();

		$links.removeClass('active');
		let $link = $(this).addClass('active');
		let id = $link.attr('href');
		let $target = $(id);

		if($target.length > 0){
			$('html,body').animate({
				scrollTop: $target.offset().top - 70
			}, 700);
		}
	});

});
