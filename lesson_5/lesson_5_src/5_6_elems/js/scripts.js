window.addEventListener('load', function(){
	let elems = document.querySelectorAll('.some');
	
	for(let i = 0; i < elems.length; i++){
		elems[i].addEventListener('click', changeColor);
	}

	function changeColor(){
		let colors = ['#f90', '#f00', '#0f0'];
		let num = Math.floor(Math.random() * colors.length);
		this.style.color = colors[num];
	}

});
