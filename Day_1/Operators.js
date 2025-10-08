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