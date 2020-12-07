window.addEventListener('load', function(){
	let some = document.querySelector('.some');
	let other = document.querySelector('.other');
	let colors = ['#f90', '#f00', '#0f0'];

	some.addEventListener('click', function(e){
		//console.log(e);
		let num = Math.floor(Math.random() * colors.length);
		some.style.color = colors[num];
	});

	other.addEventListener('mouseenter', function(){
		let num = Math.floor(Math.random() * colors.length);
		other.style.color = colors[num];
	});

});

/*
let x = 5;

function some(){
	let x = 10;

	function other(){
		let x = 100;
		console.log(x);
	}

	other();
	console.log(x);
}

some();
*/