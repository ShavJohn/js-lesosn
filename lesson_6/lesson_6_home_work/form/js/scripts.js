window.addEventListener('load', function(){

	let name = document.forms["vform"]["name"];
	let telephone = document.forms["vform"]["telephone"];
	let email = document.forms["vform"]["email"];

	console.log(name);
	console.log(telephone);
	console.log(email);

	let name_error = document.getElementById("name_error");
	let telephone_error = document.getElementById("telephone_error");
	let email_error = document.getElementById("email_error");

	console.log(name_error);
	console.log(telephone_error);
	console.log(email_error);

	name.addEventListener("blur", nameVerify, true)
	telephone.addEventListener("blur", telephoneVerify, true)
	email.addEventListener("blur", emailVerify, true)

	function Validate(){
		if(name.value == ""){
			name.style.border = "1px solid red";
			name_error.textContent = "Name is requierd";
			name.focus();
			return false;
		}


		if(telephone.value == ""){
			telephone.style.border = "1px solid red";
			telephone_error.textContent = "Name is requierd";
			telephone.focus();
			return false;
		}


		if(email.value == ""){
			email.style.border = "1px solid red";
			email_error.textContent = "Name is requierd";
			email.focus();
			return false;
		}
		
	}

	function nameVerify(){
		if (name.value !=""){
			name.style.border = "1px solid green";
			name_error.innerHTML = "";
			return true;
		}

		if (telephone.value !=""){
			telephone.style.border = "1px solid green";
			telephone_error.innerHTML = "";
			return true;
		}

		if (email.value !=""){
			email.style.border = "1px solid green";
			email_error.innerHTML = "";
			return true;
		}
	}
});
