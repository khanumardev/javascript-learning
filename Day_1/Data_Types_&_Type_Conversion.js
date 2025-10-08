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