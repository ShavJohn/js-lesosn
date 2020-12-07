window.addEventListener('load', function(){
    let btn = document.querySelector('.btn');
    let container = document.querySelector('.container p');

    btn.addEventListener('click', function(){
        container.innerHTML = "Clicked content";
    });

    /* Conditions Type list
            1.  if(){}
            2.  else(){}
            3.  else if(){}
            4.  (condition) ? true : false        //ternary operator
            5.  switch
    */

    //else if

    let variable_1 = 15;

    if (variable_1 == 0) {
        console.log(variable_1 += ' = 0');
    } else if (variable_1 < 0) {
        console.log(variable_1 += ' < 0');
    } else if (variable_1 > 0) {
        console.log(variable_1 += ' > 0');
    }

    //ternary operator

    let variable_2 = false;

    let ternar_operator = (variable_2) ? true : false;
    console.log(ternar_operator);

    //switch

    let variable_3 = 15;

    switch (variable_3) {
        case 0:
            console.log('Monday');
            break;
        case 1:
            console.log('Tuesday');
            break;
        case 2:
            console.log('Wednesday');
            break;
        case 3:
            console.log('Thursday');
            break;
        case 4:
            console.log('Friday');
            break;
        case 5:
            console.log('Saturday');
            break;
        case 6:
            console.log('Sunday');
            break;
        default :
            console.log('Undefined day of week');
    }

    /*
        Logical operators
            1.  ||  (or)
            2.  &&  (And)
            3.  !   (not)
    */

    console.log( true || true ); // true
    console.log( false || true );  // true
    console.log( true || false );  // true
    console.log( false || false ); // false

    console.log( true && true ); // true
    console.log( false && true );  // false
    console.log( true && false );  // false
    console.log( false && false ); // false    

    console.log( !false ); // true
    console.log( !true ); // false

    //functions

    let product_1 = 5;
    /*
        function - ic durs product_1 - @ ev function - i nersum bacardzak tarber en
    */

    function shopWorker(product_1, product_2, money){
        console.log("function-i nersum product_1 = ", product_1);
        let result;
        if(product_1 == "Apple"){
            product_1_price = 50;
        } else {
            product_1_price = 40;
        }

        if(product_2 == "Pineapple"){
            product_2_price = 60;
        } else {
            product_2_price = 40;
        }

        if ((product_1_price + product_2_price) > money) {
            result = 'Gumar@ chbavararec amboxg@ gnelu hamar';
        } else {
            result = product_1_price + product_2_price;
        }
        return result;
    }

    let shopWorker_result;

    shopWorker_result = shopWorker("Apple", "Pineapple", 90);

    console.log(shopWorker_result);
    console.log("function-ic durs product_1 = ", product_1);
});