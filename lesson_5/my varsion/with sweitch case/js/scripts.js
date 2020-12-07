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
		let total;
		let num1 = parseInt(inp1.value);
		let num2 = parseInt(inp2.value);

		switch(option.value){
			case '+':
				total = num1  + num2;
				break;
			case '-':
				total = num1 - num2;
				break;
			case '/':
				total = num1 / num2;
				break;
			case '*':
				total = num1 * num2;
				break;
			default:
				total = 'chka';
		}
		res.innerHTML = total;
		btn.disabled = true;
	});

	inp1.addEventListener('input', btnEnable);
	inp2.addEventListener('input', btnEnable);
	option.addEventListener('input', btnEnable);
	function btnEnable(){
		btn.disabled = false;
	};
	inp1.addEventListener('input', patern);
	inp2.addEventListener('input', patern);
	function patern(){
		this.value = this.value.replace(/[^0-9]/g, '');
		//this.value = this.value.replace(/[^0-9]/g, '');
	}
});