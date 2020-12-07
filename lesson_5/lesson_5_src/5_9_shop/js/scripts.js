window.addEventListener('load', function(e){
   
	let items = document.querySelectorAll('.item');
	let res = document.querySelector('.value');

	for(let i = 0; i < items.length; i++){
		items[i].addEventListener('click', onProductClick)
	}

	function onProductClick(){
		this.classList.toggle('item-active');

		let total = 0;

		for(let i = 0; i < items.length; i++){
			if(items[i].classList.contains('item-active')){
				total += parseInt(items[i].dataset.price);
			}
		}

		res.innerHTML = total;
	}

});



/*

	this.classList.add('item-active')
	this.classList.remove('item-active')
	this.classList.contains('item-active')
	this.classList.toggle('item-active')

	toggle = 

		if contains
			remove
		else
			add
*/
