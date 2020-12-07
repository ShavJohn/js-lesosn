window.addEventListener('load', function(){
	let box = document.querySelector('.box');
	
	box.addEventListener('click', function(e){
		if(e.target.classList.contains('text')){
			let colors = ['#f90', '#f00', '#0f0'];
			let num = Math.floor(Math.random() * colors.length);
			e.target.style.backgroundColor = colors[num];
		}
	});

});
