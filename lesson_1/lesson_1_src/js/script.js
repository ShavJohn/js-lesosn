//Javascript Popup Boxes

/* alert("My first script");
confirm("Press a button!");
prompt("Please enter your name", "Henry Ford"); */

//Data types
let string_variable = "Some string";
let number_variable = 5;
let boolean_variable = true;
let null_variable = null;
let object_variable = {};


console.log(typeof(string_variable));
console.log(typeof(number_variable));
console.log(typeof(boolean_variable));
console.log(typeof(undefined_variable));
console.log(typeof(object_variable));
console.log(typeof(null_variable));

console.log("-----------------------------------------");

/*
    JavaScript Arithmetic Operators
    (+, -, *, **, /, %, ++[increment], --[decrement])
*/

let x = 11;
let y = 2;

let result_sum = x + y;
console.log(result_sum);

let result_subtraction = x - y;
console.log(result_subtraction);

let result_multiplication = x * y;
console.log(result_multiplication);

let result_exponentiation = x ** y;
console.log(result_exponentiation);

let result_division = x / y;
console.log(result_division);

let result_modulus = x % y;
console.log(result_modulus);

let result_increment = ++x;
console.log(result_increment);
console.log(x);

//Attention Please
let result_increment_reverse = x++;
console.log(result_increment_reverse);
console.log(x);
//End Attention Please :))))

let result_decrement = --y;
console.log(result_decrement);
console.log(x);

//Attention Please
let result_decrement_reverse = y--;
console.log(result_decrement_reverse);
console.log(x);
//End Attention Please :))))

console.log("-----------------------------------------");

/*
    JavaScript Assignment Operators
    (=, +=, -=, *=, /=, %=)
*/

let other_x = 6;
let other_y = 2;

console.log(other_x += other_y); // x = x + y
console.log(other_x -= other_y); // x = x - y
console.log(other_x *= other_y); // x = x * y
console.log(other_x /= other_y); // x = x / y
console.log(other_x %= other_y); // x = x % y

console.log("-----------------------------------------");

/*
    Concatenating Strings with Plus Operator
    (+=)
*/

let an_other_x = 6;
let an_other_y = "2";

let result_concatenating  = an_other_x + an_other_y;
console.log(result_concatenating);

/*
    document.write method
    (+=)
*/

document.write(result_concatenating);
document.write(result_concatenating);

