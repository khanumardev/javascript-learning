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