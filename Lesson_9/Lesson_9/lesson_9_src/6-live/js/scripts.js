$(function() {

	let items = $('.items');
	let inputs = $('.items .check');

	items.on('focus', '.check', function(){
		$(this).addClass('active'); 
	});

	items.on('blur', '.check', function(){
		$(this).removeClass('active'); 
	});

	$('.addField').on('click', function(){
		let inp = $('<input>').attr('type', 'text').addClass('check');
		let div = $('<div>').addClass('item').append(inp);
		items.append(div);
	});

});

$('*').on('click', function(e){
	console.log(e.target);
	//e.stopPropagation();
	//let target = $(e.target);

	//if(target.hasClass('some')){
	//	target.html('deleted');
	//}
});


/*
window
	document
		body
			....
			div.items
				div.item
					input.check
				div.item
					input.check 
				div.item
					input.check
				div.item
					input[type=text class=check]

				*/