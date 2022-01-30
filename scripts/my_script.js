// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  


var name1 = "Vincent";


// myName = "Vincent Daniel Cubit" - Allowed but frowned upon


function names() {

    //fix the errors
    var firstName = "Vincent",
    lastName = "Cubit";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}


function scope() {
    //fix the errors
    const taxRate = .07; // This is a constant
    var firstName = "Vincent",
    lastName = "Cubit";
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}


function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Ory";
    document.getElementById("dog1-2").innerHTML = dog2;
}


function constants() {
    // fix the errors
    const PI = 3.14;
    var dogs = ["Ollie", "Nessie", "Ory"];
    dogs[0] = "Ollie Bear";
    dogs = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("doggos").innerHTML = dogs;
}


function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 40 + 40;
    let subtraction = 40 - 20;
    let multiplication = 20 * 5;
    let exponent = 4 ** 4;
    let division = 100 / 4;
    let modulus = 140 % 25;
    let num1 = 4
    let num2 = 10
    num1++;
    num2--;
    document.getElementById("addition").innerHTML = `40 + 40 = ${ addition }`;
    document.getElementById("subtraction").innerHTML = `40 - 20 = ${ subtraction }`;
    document.getElementById("multiplication").innerHTML = `20 * 5 = ${ multiplication }`;
    document.getElementById("exponent").innerHTML = `4 ** 4 = ${ exponent }`;
    document.getElementById("division").innerHTML = `100 / 4 = ${ division }`;
    document.getElementById("modulus").innerHTML = `140 % 25 = ${ modulus }`;
    document.getElementById("increment").innerHTML = `4++ = ${ num1++ }`;
    document.getElementById("decrement").innerHTML = `10-- = ${ num2-- }`;
}


function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10;
    document.getElementById("equals").innerHTML = "x = 10" + " : x = " + x;
    x += 1;
    document.getElementById("plus-equals").innerHTML = `x += 1 : x = ${ x }`;
    x -= 1;
    document.getElementById("minus-equals").innerHTML = `x -= 1 : x = ${ x }`;
    x *= 4;
    document.getElementById("times-equals").innerHTML = `x *= 4 : x = ${ x }`;
    x /= 4;
    document.getElementById("divide-equals").innerHTML = `x /= 4 : x = ${ x }`;
    x %= 4;
    document.getElementById("modulus-equals").innerHTML = `x %= 4 : x = ${ x }`;
}


function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const array = [ 1, 2, 3, 4, 5 ];
    const object = {
        "name": "Vincent Cubit",
        "age": 20
    }
    document.getElementById("array").innerHTML = array;
    document.getElementById("object").innerHTML = `${object.name}, ${object.age}`;

}

