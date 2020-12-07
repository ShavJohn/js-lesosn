$(function(){
	
	$('[title]').tooltip({
		placement: 'left'
	});
	
	let $modal = $('.modal-reg');

	$modal.modal({
		show: false
	});

	$('.btnSend').on('click', function(){
		$modal.modal('show');
	});

});
