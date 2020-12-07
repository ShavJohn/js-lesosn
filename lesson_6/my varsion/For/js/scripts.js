window.addEventListener('load', function(e){
	
	let CST = document.querySelectorAll('.check');
	let btn = document.querySelector('#btn');

	//console.log(btn);

	btn.addEventListener('click', function(e){

		let nameValid = /^[a-z]{3,6}$/;
		let phoneValid = /^[0-9]+$/;
		let mailValid = /^.+@.+\.[a-z]+$/;
		//let passValid = /^[a-z]+$/;

		for(i = 0; i < CST.length; i++){
			if(CST[i].value == ""){
				CST[i].classList.add("err");
				btn.disabled = true;
				e.preventDefault()
			}
			
			if(CST[i].name == "email"){
				if(!CST[i].value.match(mailValid))
				CST[i].classList.add("err")
				btn.disabled = true;
				e.preventDefault()
			}

			if(CST[i].name == "name"){
				if(!CST[i].value.match(nameValid))
				CST[i].classList.add("err")
				btn.disabled = true;
				e.preventDefault()
			}

			if(CST[i].name == "phone"){
				if(!CST[i].value.match(phoneValid))
				CST[i].classList.add("err")
				btn.disabled = true;
				e.preventDefault()
			}

		};

	});

	for(i = 0; i < CST.length; i++){
		CST[i].addEventListener('input', remove)
	}
	function remove(){
		this.classList.remove('err');
		btn.disabled = false;
	}
});


