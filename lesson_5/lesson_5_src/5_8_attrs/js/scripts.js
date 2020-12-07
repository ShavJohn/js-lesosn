window.addEventListener('load', function(){
	let elems = document.querySelectorAll('.some');
	
	for(let i = 0; i < elems.length; i++){
		elems[i].addEventListener('click', changeColor);
	}

	function changeColor(){
		console.log(this.getAttribute('data-color'));
		console.log(this.dataset.color)
		this.style.color = this.dataset.color;
	}

});
