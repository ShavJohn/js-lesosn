window.addEventListener('load', function(e){
	
	let allInputs = document.querySelectorAll('.check');
	let form = document.querySelectorAll('form');
	let pass1 = document.querySelector('#pass1');
	let pass2 = document.querySelector('#pass2');
	let patterns = {
		'name': /^[A-Za-z]+$/,
		'phone': /^[0-9]{7,15}$/,
		'email': /^.+@.+\..+/,
		'pass': /^[a-z]{4,6}$/
	}

	form[0].addEventListener('submit', function(event){
		let isError = false;
		allInputs.forEach(inputsValidation);

		function inputsValidation(item, index){
			let value = item.value.trim();
			let validation = item.getAttribute("data-validation");
			let pattern = patterns[validation];
			if(pattern.test(value) != ''){
				item.classList.remove('err');
			}else{
				item.classList.add('err');
				isError = true;
			}
			
			if(pass1.value != pass2.value){
				item.classList.add('err');
				isError = true;
			}
		}
		if(isError){
			event.preventDefault();
		}
	});
});


