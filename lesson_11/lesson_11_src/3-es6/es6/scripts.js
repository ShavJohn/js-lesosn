window.addEventListener('load', function(e){
	/*
	for(var i = 0; i < 10; i++){
		console.log(i);
	}

	console.log(i);

	for(let j = 0; j < 10; j++){
		console.log(j);
	}

	console.log(j);
	
	for(var i = 1; i <= 5; i++){
		setTimeout(function(){
			console.log(i);
		}, i * 1000);
	}

	
	for(let i = 1; i <= 5; i++){
		setTimeout(function(){
			console.log(i);
		}, i * 1000);
	}
	

	document.querySelector('.value').addEventListener('click', function(){
		let that = this;
		setTimeout(function(){
			that.style.color = 'red';
		}, 1000);
	});
	*/


	function sum(a, b){
		return a + b;
	}

	let sub = function(a, b){
		return a - b;
	}

	let mult = (a, b) => {
		return a - b;
	}

	document.querySelector('.value').addEventListener('click', function(){
		//			this
		setTimeout(() => {
			//      ^
			// this |
			this.style.color = 'red';
		}, 1000);
	});
/*
	*/

});