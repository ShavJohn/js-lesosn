window.addEventListener('load', function(){
   
	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let option = document.querySelector('.dolist')
	let btn = document.querySelector('.go');
	let res = document.querySelector('.res');

	btn.addEventListener('click', donow,)
	 function donow(){
		if(option.value == '+'){
			let sum = parseInt(inp1.value) + parseInt(inp2.value);
			res.innerHTML = sum;
		}else if(option.value == '-'){
			let sum = parseInt(inp1.value) - parseInt(inp2.value);
			res.innerHTML = sum;
		}else if(option.value == '/'){
			let sum = parseInt(inp1.value) / parseInt(inp2.value);
			res.innerHTML = sum;
		}else if(option.value == '*'){
			let sum = parseInt(inp1.value) * parseInt(inp2.value);
			res.innerHTML = sum;
		}
	}
	btn.addEventListener('click', checkerror_1)
	function checkerror_1(){
		if(inp1.value == ""){
			inp1.value = inp1.getAttribute('data-placeholder');
		}
		//btn.disabled = true;
	}
	btn.addEventListener('click', checkerror_2)
	function checkerror_2(){
		if(inp2.value == ""){
			inp2.value = inp2.dataset.placeholder;
		}
		//btn.disabled = true;
	}
	btn.addEventListener('input', changes)
	function changes(){
		inp1.value = target.value;
		btn.disabled = false;
	}
	/*btn.addEventListener('click', desableall)
	function desableall(){
		for(let i = 0; i < 1; i++){
			if(inp1.value + inp2.value){
				btn.disabled = false;
				console.log(btn.disabled);
			}
		}
	}*/
});