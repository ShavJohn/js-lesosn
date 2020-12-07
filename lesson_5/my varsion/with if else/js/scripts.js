window.addEventListener('load', function(){
   
	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let option = document.querySelector('.dolist')
	let btn = document.querySelector('.go');
	let res = document.querySelector('.res');

	btn.addEventListener('click', function(){
		if(inp1.value == ''){
			inp1.placeholder = '123456...';
			btn.disabled = true;
		}

		if(inp2.value == ''){
			inp2.placeholder = '123456...';
			btn.disabled = true;
		}
	});

	btn.addEventListener('click', function(){
		let num1 = parseInt(inp1.value);
		let num2 = parseInt(inp2.value);
		if(option.value == '+'){
			let sum = num1 + num2;
			res.innerHTML = sum;
		}else if(option.value == '-'){
			let sum = num1 - num2;
			res.innerHTML = sum;
		}else if(option.value == '/'){
			let sum = num1 / num2;
			res.innerHTML = sum;
		}else if(option.value == '*'){
			let sum = num1 * num2;
			res.innerHTML = sum;
		}
		btn.disabled = true;
	});
	inp1.addEventListener('input', btnEnable);
	inp2.addEventListener('input', btnEnable);
	option.addEventListener('input', btnEnable);

	inp1.addEventListener('input', prepareInput);
	inp1.addEventListener('input', prepareInput);

	function btnEnable(){
		btn.disabled = false;
	}

	function prepareInput(){
		this.value = this.value.replace(/[^0-9]/g, '');
	}
});