window.addEventListener('load', function(){

    //Select DOM elements for use
    let firstNumber = document.querySelector('.firstNumber');
    let secondNumber = document.querySelector('.secondNumber');
    let selectBox = document.querySelector('.mathOperations');
    let btn = document.querySelector('.getResult');
    let res = document.querySelector('.res');

    // Initialization default settings
    btn.disabled = true;

    //All events
    [firstNumber, secondNumber].forEach(prepareInput);

    function prepareInput(item, index){
        item.addEventListener('input', function(){
            if(this.hasAttribute("placeholder"))
                this.removeAttribute("placeholder");
            this.value = this.value.replace(/[^0-9]/g, '');
            btn.disabled = false;
        });
    }

    selectBox.addEventListener('change', function(){
        btn.disabled = false;
        secondNumber.removeAttribute("placeholder");
    });

    btn.addEventListener('click', function(){
        let total;

        if(secondNumber.value != '' && firstNumber.value != ''){
            let parseIntFirstNumber = parseInt(firstNumber.value);
            let parseIntSecondNumber = parseInt(secondNumber.value);

            switch(selectBox.value){
                case 'sum':
                    total = parseIntFirstNumber + parseIntSecondNumber;
                    break;
                case 'subtraction':
                    total = parseIntFirstNumber - parseIntSecondNumber;
                    break;
                case 'multiplication':
                    total = parseIntFirstNumber * parseIntSecondNumber;
                    break;
                case 'division':
                    if(secondNumber.value == '0'){
                        secondNumber.value = '';
                        secondNumber.setAttribute("placeholder", "Type (1-9) numbers");
                        total = '';
                    }else{
                        total = parseIntFirstNumber / parseIntSecondNumber;
                    }
                    break;
                default:
                    total = 'Undefined operation';
            }
            res.innerHTML = total;
        }else{
            if(firstNumber.value == ''){
                firstNumber.setAttribute("placeholder", "Please complete field");
            }

            if(secondNumber.value == ''){
                secondNumber.setAttribute("placeholder", "Please complete field");
            }
        }
        btn.disabled = true;
    });
});