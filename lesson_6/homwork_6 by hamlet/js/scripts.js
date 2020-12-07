window.addEventListener('load', function(e){
    let user = document.querySelectorAll('.check');
    let btn = document.querySelector('.btn');

    btn.addEventListener('click',function(e){

        let nameformat = /^[a-zA-Z]+$/;
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let telformat = /^[+-00-9]+$/;

        for(i = 0; i < user.length; i++){
            if(user[i].value == ""){

                user[i].classList.add("err");
                document.querySelector('.btn').disabled = true;
                e.preventDefault()
            }
           
            if(user[i].name == "email"){

                if(!user[i].value.match(mailformat)){
                    user[i].classList.add("err")
                    document.querySelector('.btn').disabled = true;
                    e.preventDefault()

                }
            }

            if(user[i].name == "name"){

                if(!user[i].value.match(nameformat) || user[i].value.length <= 3){
                    user[i].classList.add("err")
                    document.querySelector('.btn').disabled = true;
                    e.preventDefault()
                }
            }

            if(user[i].name == "phone"){

                if(!user[i].value.match(telformat) || user[i].value.length <= 8){
                    user[i].classList.add("err")
                    document.querySelector('.btn').disabled = true;
                    e.preventDefault()
                }
            }
        }
        
        
    });

    for(i = 0; i < user.length; i++){

        user[i].addEventListener('input',remove)
    }
    function remove(){
        
        this.classList.remove('err');
        document.querySelector('.btn').disabled = false;
    }

	
});
