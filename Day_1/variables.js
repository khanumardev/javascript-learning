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