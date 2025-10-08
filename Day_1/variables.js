// Variables (var, let, const)
function test_var(){
    var num = 10;

    var num = 11;

    console.log(num); // Re-declaration allowed
}
test_var();

function test_var2(){
    var name = "Umar khan";
    name = "Umar Ali";
    console.log(name); // Re-assignment allowed
}
test_var2();

function test_var3(){
    console.log(city); //undefined (not ReferenceError)
    if(true){
    var city = "Mingora";
    }
    console.log(city); // var is a function-scope
}
test_var3();



function test_let(){
    if(true){
        let x = 15;
        console.log(x); // let is block-scope
    }
    //console.log(x) // ReferenceError cause let can only be accessed in a block.
}
test_let()

function test_let2(){
  let age = 23;
  age = 24
  console.log(age) // output: 24, in let Re-assignment is allowed
}

test_let2()

function test_let3(){
  let age = 23;
  //let age = 24; // In let Re-declaration is not allowed.
  console.log(age) // Error: Uncaught SyntaxError: redeclaration of let age
}
test_let3()

function test_let4(){
 //console.log(age) // In let we can't access 'age' before initialization
  let age = 23;
  console.log(age)
}
test_let4()

function test_const(){
    const pi = 3.14
   // pi = 3.14
    console.log(pi) // in const Re-assignment is not allowed
}
test_const()

function test_const2(){
    const pi = 3.14
    //const pi = 3.14
    console.log(pi) // in const Re-decleration is also not allowed
}
test_const()

function test_const3(){
    if(true){
        const x = 25;
        console.log(x); // let is block-scope
    }
    //console.log(x) // ReferenceError cause const can only be accessed in a block.
}
test_const3()

function test_const4(){
 //console.log(age) // In const we can't 'age' before initialization
  const age = 23;
  console.log(age)
}
test_const4()

// Practice: Declare variables with each type and test scope inside a function and a block.
var x = 12;
let y = 20;
const z = 30;
console.log(x, y, z)
function all_variables(){ // The all_variables is a function-scope
    if(true){ // This is a block-scope
    var a = "User";
    let b = "hi";
    const c = "bye!"
    console.log(b); // will work here.
    console.log(c); // also work here.
    }
console.log(a); // Works cause var is function-scope
//console.log(b); // doesn't work cause let is block-scope
//console.log(c); // doesn't work cause const is block-scope
}
all_variables()
//Practice end.


// Data Types & Type Conversion

//Primitive types: Basic, immutable data types that store single values directly in memory.
let str = "hello";  // string
str[0] = "H";
console.log(str); //Output: hello, can't be changed to 'Hello' as it's immutable
let num = 42;   // number
console.log(num);
let bool = true;  // boolean
console.log(bool);
let nothing = null;  // null
console.log(nothing);
let undef_var;       // undefined
console.log(undef_var);
let big = 123n;  // bigint
console.log(big);
let sym = Symbol("id"); // symbol
console.log(sym);

// Reference types
let obj = {name: "Umar"};// object
let obj1 = {age: 20}
let obj2 = obj;
console.log(obj === obj2) // True (same reference(memory address))
console.log(obj1 === obj2) // false (Different reference(memory address))
obj2.name = "Umar khan"
console.log(obj.name) // output: Umar khan(changed)
let arr = [1,2,3];  // array
arr.push(4)
console.log(arr)
console.log(arr[2]) // output:3, array calling through indexing. 
let func = () => "hi"; // function
console.log(func)

//Explicit conversion(Type Casting)): means when we intentionally convert a value from one type to another using built-in functions(Number, String e.t.c.)
let number = "123"
console.log(Number(number));   // 123
let str_num = "123abc"
console.log(Number(str_num));  // NaN
let str_num2 = "123abc"
console.log(parseInt(str_num2));// 123
let num_float = "12.5";
console.log(parseFloat("12.5"));// 12.5
let num_float2 = "12.534";
console.log(parseFloat(num_float2))
let string2 = 123;
console.log(String(string2));// "123"
let bool_2 = "";
console.log(Boolean(bool_2));  // false
let bool_3 = "hi"
console.log(Boolean(bool_3));  // true

// Implicit Conversion (Type Coercion): happens automatically by JavaScript when it encounters operations between different types.

let  str_number = "The number is: " + 5; // string + number = string (The '+' operator does concatenation while the other operators(-,*,/,%) does mathmatical operations.)
console.log(str_number) //String

let number_str = 6 + " The number is: "; // Number + string = string
console.log(number_str) //String

console.log(10 - "5") // 5
console.log(10 * "5") // 50
console.log(10 / "5") // 2
console.log(10 % "2") // 0
console.log(5 - true) // 4
console.log("3" - false) // 3
console.log(null - true) // -1
console.log(undefined - false) // NaN

// Practice: Convert strings to numbers and test edge cases ("123abc", true, false, null).
console.log(Number("123")); // 123
console.log(Number("123abc")); // NaN
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(String(null)) // null
console.log(String(100)); // "100"

// Operators

//Arithmetic(+, -, *, /, %, **)

console.log(2 +2); // 4
console.log(3 - 4); // -1
console.log(3 / 9); // 0.3333333333333333
console.log(2 * 13); // 26
console.log(5 % 4); // 1
console.log(2 ** 8); // 256

// Comparison(== vs ===, != vs !==, <, >, <=, >=).
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(5 != "5"); // false
console.log(10 !== "10"); // true
console.log(5 > 7); // false
console.log(5 < 7); // true
console.log(5 >= 5); // true
console.log(5 <= 4); // false

// Logical(&&, ||, !).
console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(false || false); // false

// Assignment operators(=, +=, -=, etc).
let greeting = "hello";
console.log(greeting) // hello
let number_assign = 12;
number_assign += 12;
console.log(number_assign) //24

let number_assign2 = 6;
number_assign2 -= 5;
console.log(number_assign2) // 1

let number_assign3 = 2;
number_assign3 *= 5;
console.log(number_assign3) // 10

//Practice: Create expressions using each operator and predict the result before running.
console.log(5 + "5");  // "55" (string concatenation(+))
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(true && false); // false

// Functions
// Function declaration (function add(a,b){}) vs expression (const add = function(){}).

function greet(user){
    return `Assalam o alaikum, ${user}`
}
console.log(greet("umar"));

const welcome_user = function(user_2){
    console.log(`Welcome back, ${user_2}`)
}
welcome_user("Umar khan")

// Arrow functions (const add = (a,b) => a+b).

const subtract = (x, y) => x - y;
console.log(subtract(5, 4)) // 1

// Default parameters (function greet(name="Guest"){})

function student_greet(Student='none'){
 return `Welcome to class, Student: ${Student}`
}
console.log(student_greet("Mustafa"))

// Rest parameters (function sum(...nums){})

function Tourist(...tourists){
return `today total ${tourists.length} tourist enrolled, there names are: ${tourists}`
}
console.log(Tourist("Umar khan", "Mustafa khan", "Mujtaba khan", "Ali", "Ahmad."))

// Function return values.

function return_value(a, b){
    let sum = a + b;
    return `The total is: ${sum}`;
}
console.log(return_value(4, 6))// 10

// Practice: Write
// a sum function,
// a function that capitalizes the first letter of a string,
// a function that takes variable arguments and returns the largest.

function sum(d, e){
    let sum_value = d + e;
    return `The total is: ${sum_value}`;
}

console.log(sum(5, 10))

const capitalize = function(str){
    //let greeting = "assalam o alaikum"
    return greeting.charAt(0).toUpperCase() + greeting.slice(1);
}
console.log(capitalize("hello")) // Hello

const largest = (...LargeNum) => Math.max(...LargeNum)
console.log(largest(6, 7, 9, 13, 16)) // 16

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
