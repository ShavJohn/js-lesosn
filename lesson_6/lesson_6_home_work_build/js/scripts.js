window.addEventListener('load', function(e){
    
    let allInputs = document.querySelectorAll('[class]');
    let form = document.querySelectorAll('form');
    let patterns = {
        'name': /^[A-Za-z]+$/,
        'phone': /^[0-9]{7,15}$/,
        'email': /^.+@.+\..+/
    }

    console.log(form);

    
    form[0].addEventListener('submit', function(event){
        let isError = false;
        allInputs.forEach(inputsValidation);

        function inputsValidation(item, index){
            console.log(item, index);
            let value = item.value.trim();
            let validation = item.getAttribute("data-validation");
            let pattern = patterns[validation];
            if(pattern.test(value) != ''){
                item.classList.remove('err');
            }else{
                item.classList.add('err');
                isError = true;
            }
        }

        if(isError){
            event.preventDefault();
        }
    });
});
