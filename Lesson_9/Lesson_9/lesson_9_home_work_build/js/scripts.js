$(function(){
	
	let $window = $(window);
	let $links = $('.menu a');
	let $btnUp = $('.btnUp');
	let pxPerSec = 2;
	
	$links.on('click', function(e){
		e.preventDefault();

		//$links.removeClass('active');
		let $link = $(this)//.addClass('active');
		let id = $link.attr('href');
		let $target = $(id);

		let s1 = $window.scrollTop();
		let s2 = $target.offset().top - 70;
		let distance = Math.abs(s1 - s2);

		if($target.length > 0){
			$('html,body').animate({
				scrollTop: s2
			}, distance / pxPerSec);
		}
	});

	$btnUp.on('click', function(){
		let distance = $window.scrollTop();

		$('html,body').animate({
			scrollTop: 0
		}, distance / pxPerSec);
	});

	$window.on('scroll', onScroll);
	onScroll();

	function onScroll(){
		let pos = $window.scrollTop();
		
		if(pos > 500){
			$btnUp.stop().fadeIn(500);
		}
		else{
			$btnUp.stop().fadeOut(500);
		}

		for(let i = $links.length - 1; i >= 0; i--){
			let $link = $links.eq(i);
			let id = $link.attr('href');
			let $target = $(id);

			if(pos > $target.offset().top - 300){
				$links.removeClass('active');
				$link.addClass('active');
				break;
			}
		}
	}

});
