window.addEventListener('load', function(){

    // Initializing and declaring array
    let weekDays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    // Access the Elements of an array
    console.log(weekDays);
    console.log(weekDays[6]);
    //______________________________________________


    // Initializing and declaring array
    let weekDays_1 = [];
    weekDays_1[0] = "Monday";
    weekDays_1[1] = "Tuesday";
    weekDays_1[2] = "Wednesday";
    weekDays_1[3] = "Thursday";
    weekDays_1[4] = "Friday";
    weekDays_1[5] = "Saturday";
    weekDays_1[6] = "Sunday";

    //Access the Elements of an array
    console.log(weekDays_1);
    console.log(weekDays_1[0]);
    console.log(weekDays_1);
    //______________________________________________


    // Array Methods
    // pop() method
    let weekDays_3 = [];
    weekDays_3[0] = "Monday";
    weekDays_3[1] = "Tuesday";
    weekDays_3[2] = "Wednesday";
    weekDays_3[3] = "Thursday";
    weekDays_3[4] = "Friday";
    weekDays_3[5] = "Saturday";
    weekDays_3[6] = "Sunday";
    console.log(weekDays_3); // method - @ kirareluc arag
    let popReturnedValue = weekDays_3.pop(); // Gngum e vergin element@ ev veradarcnum e gngvac element@
    console.log(popReturnedValue);
    console.log(weekDays_3); // method - @ kirareluc heto

    // push() method
    let weekDays_4 = [];
    weekDays_4[0] = "Monday";
    weekDays_4[1] = "Tuesday";
    weekDays_4[2] = "Wednesday";
    weekDays_4[3] = "Thursday";
    weekDays_4[4] = "Friday";
    weekDays_4[5] = "Saturday";
    console.log(weekDays_4); // method - @ kirareluc arag
    let pushReturnedValue = weekDays_4.push("Sunday"); // Avelacnum e element@ vergum ev veradarcnum nor array - i erkarutyun@
    console.log(pushReturnedValue);
    console.log(weekDays_4); // method - @ kirareluc heto

    // shift() method
    let weekDays_5 = [];
    weekDays_5[0] = "Monday";
    weekDays_5[1] = "Tuesday";
    weekDays_5[2] = "Wednesday";
    weekDays_5[3] = "Thursday";
    weekDays_5[4] = "Friday";
    weekDays_5[5] = "Saturday";
    weekDays_5[6] = "Sunday";
    console.log(weekDays_5); // method - @ kirareluc arag
    let shiftReturnedValue = weekDays_5.shift(); // Gngum e aragin element@ ev veradarcnum e gngvac element@
    console.log(shiftReturnedValue);
    console.log(weekDays_5); // method - @ kirareluc heto

    // unshift() method
    let weekDays_6 = [];
    weekDays_6[0] = "Tuesday";
    weekDays_6[1] = "Wednesday";
    weekDays_6[2] = "Thursday";
    weekDays_6[3] = "Friday";
    weekDays_6[4] = "Saturday";
    weekDays_6[5] = "Sunday";
    console.log(weekDays_6); // method - @ kirareluc arag
    let unshiftReturnedValue = weekDays_6.unshift("Monday"); // Avelacnum e element@ skzbum ev veradarcnum e nor array - i erkarutyun@
    console.log(unshiftReturnedValue);
    console.log(weekDays_6); // method - @ kirareluc heto

    //Changing array elements
    let weekDays_7 = [];
    weekDays_7[0] = "Monday";
    weekDays_7[1] = "Tuesday";
    weekDays_7[2] = "Wednesday";
    weekDays_7[3] = "Thursday";
    weekDays_7[4] = "Friday";
    weekDays_7[5] = "Saturday";
    weekDays_7[6] = "Sunday";
    console.log(weekDays_7[0]); // Element@ poxeluc arag
    console.log(weekDays_7[0] = "Mondayyyyy"); // Element@ poxeluc heto

    // length method
    let weekDays_8 = [];
    weekDays_8[0] = "Monday";
    weekDays_8[1] = "Tuesday";
    weekDays_8[2] = "Wednesday";
    weekDays_8[3] = "Thursday";
    weekDays_8[4] = "Friday";
    weekDays_8[5] = "Saturday";
    weekDays_8[6] = "Sunday";
    console.log(weekDays_8.length); //veradarcnum array - i erkarutyun@

    // splice(start_index, deleteCount, new element_1, element_2 ...) method
    let weekDays_9 = [];
    weekDays_9[0] = "Monday";
    weekDays_9[1] = "Tuesday";
    weekDays_9[2] = "Wednesday";
    weekDays_9[3] = "Saturday";
    weekDays_9[4] = "Sunday";
    console.log(weekDays_9); // method - @ kirareluc arag
    let spliceReturnedValue = weekDays_9.splice(3, 2, "Thursday", "Friday", "Saturday", "Sunday"); //veradarcnum gngvac elementneric kazmvac nor array
    console.log(spliceReturnedValue);
    console.log(weekDays_9); // method - @ kirareluc heto

    // slice(start_index, deleteCount, new element_1, element_2 ...) method
    let weekDays_10 = [];
    weekDays_10[0] = "Monday";
    weekDays_10[1] = "Tuesday";
    weekDays_10[2] = "Wednesday";
    weekDays_10[3] = "Thursday";
    weekDays_10[4] = "Friday";
    weekDays_10[5] = "Saturday";
    weekDays_10[6] = "Sunday";
    console.log(weekDays_10); // method - @ kirareluc arag
    let sliceReturnedValue = weekDays_10.slice(1); //veradarcnum nor array vor@ sksvum e 1 index-ic
    console.log(sliceReturnedValue);
    console.log(weekDays_10); // method - @ kirareluc heto

    /*
        Loops
            1. for
            2. while
            3. do while
    */

    let weekDays_11 = [];
    weekDays_11[0] = "Monday";
    weekDays_11[1] = "Tuesday";
    weekDays_11[2] = "Wednesday";
    weekDays_11[3] = "Thursday";
    weekDays_11[4] = "Friday";
    weekDays_11[5] = "Saturday";
    weekDays_11[6] = "Sunday";

    // for(index; arrayLength; index++){...}

    for(let i = 0; i < weekDays_11.length; i++){
        this.console.log(i, weekDays_11[i]);
    }

    this.console.log("-----------------------------------");

    // do{...} while(condition) {...}

    let j = 0;

    do {
        console.log(j, weekDays_11[j]);
        j++
    }

    while(j < weekDays_11.length - 1){
        console.log(j, weekDays_11[j]);
        j++;
    }

    this.console.log("-----------------------------------");


    // while(condition) {...}

    let k = 0;

    while(k < weekDays_11.length){
        console.log(k, weekDays_11[k]);
        k++;
    }

    this.console.log("-----------------------------------");

    // break, continue, conditions in loop

    let for_condition_var = true;

    for(let u = 0; u < weekDays_11.length; u++){
        if (for_condition_var) {
            this.console.log(u, weekDays_11[u]);
            continue;
        } else {
            this.console.log(u, weekDays_11[u]);
            break;
        }
    }

});