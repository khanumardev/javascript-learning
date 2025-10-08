// Scope & Hoisting

// Global scope vs local scope.

let Global_var = 10; // Global variable can be accessed anywhare.

function access_Global_var(){
    console.log(Global_var) // calling global variable
}
access_Global_var() // 10

function local_scope(){
let local_var = "hello";
}
// console.log(local_var) // ReferenceError: local_var is not defined

// Function scope vs block scope.
function function_block_scope(){ // this is function scope
for(i=0; i < 5; i++){ // this is block scope
console.log(i) 
}
}
function_block_scope() // 4

// Hoisting of var vs let/const.
console.log(var_hoisting) // undefined
var var_hoisting = 10;

//console.log(let_hoisting) // ReferenceError: can't access 'let_hoisting' before initialization
let let_hoisting = "Hello"

//console.log(const_hoisting) // ReferenceError: can't access 'const_hoisting' before initialization
const const_hoisting = "bye!"


// Function hoisting vs function expressions.
function_hoisting() // Hello, Work before decleration.
function function_hoisting(){
    console.log("hello")
}
function_hoisting() // hello, work after decleration.
function outer(){
    inner() //hoisted

    function inner(){
        console.log("its inner function.")
    }
}
outer()

//function_expression_hoisting() // TypeError: function_expression_hoisting is not a function
var function_expression_hoisting = function(){
    console.log("Welcome.")
}
function_expression_hoisting()

// Practice:

//     Declare variables with var and let inside blocks and test accessibility.

//     Call a function before declaring it and see what happens.

//     Try using let/const before declaration and notice the error.

function checking_var_and_let(){
    if(true){
        var checking_var = "hello var"
    }
    console.log(checking_var) // hello var
    if(true){
        let checking_let = "hello let"
        console.log(checking_let) // hello let.
    }
    //console.log(checking_let) // ReferenceError: checking is not defined
}
checking_var_and_let()

//console.log(b_decleration) // ReferenceError: can't access'b_decleration' before initialization
let b_decleration = "before decleartion."

//console.log(b_decleration_const) // ReferenceError: can't access lexical declaration 'b_decleration_const' before initialization
let b_decleration_const = "before decleartion."

// Build a small math utility file:

//     add(a,b)

//     subtract(a,b)

    //     multiply(a,b)

    //     divide(a,b)

    //     formatString(str) → returns string with first letter capitalized

    //     Test them in console with sample inputs.

function add(a, b) {
    return a + b;
}
console.log(add(3, 5))
function subtract_2(a, b) {
    return a - b;
}
console.log(subtract_2(9, 5))

function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 10))

function divide(a, b) {
    if (b === 0) {
        return 'Division by zero is not allowed!';
    }
    return a / b;
}
console.log(divide(3, 7))

function formatString(str) {
    if (!str || typeof str !== 'string') return str || '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(formatString("umar khan"))