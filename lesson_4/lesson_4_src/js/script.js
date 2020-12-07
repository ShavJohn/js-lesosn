window.addEventListener('load', function(){

    //All the types of data

    let string_data = "test";
    let number_data_1 = 15;
    let number_data_2 = 15.888;
    let boolean_data = true;
    let null_data = null;
    let array_data = [];
    let object_data = {};

    this.console.log(typeof(string_data));
    this.console.log(typeof(number_data_1));
    this.console.log(typeof(number_data_2));
    this.console.log(typeof(boolean_data));
    this.console.log(typeof(null_data));
    this.console.log(typeof(array_data));
    this.console.log(typeof(object_data));

    this.console.log('-------------------------------------');

    //Objects

    let custom_object = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        favorites: {
            sport: "football",
            color: "grey"
        },
        getFullName: function(){
            this.firstName = "Alek";
            return (this.firstName + ' ' + this.lastName);
        }
    };

    //Call the object properties

    let other_var = "firstName";

    this.console.log(custom_object.firstName);
    this.console.log(custom_object['firstName']);
    this.console.log(custom_object[other_var]);
    this.console.log(custom_object.favorites.color);
    this.console.log(custom_object['favorites'].color);
    this.console.log(custom_object['favorites']['color']);

    //Call the object properties = function

    this.console.log(custom_object.getFullName());

    this.console.log('-------------------------------------');

    //Global javascript Object

    console.log(this);

    this.console.log('-------------------------------------');

    //Loop for object

    let user = {
        firstName: "John",
        lastName: "Doe",
        age: 27,
        email: "johndoe@gmail.com",
        phone: "+(37493)568574"
    };

    //for in loop (person=>index in user=>object)

    for (let person in user) {
        console.log(person, '=>', user[person]);
    }

});