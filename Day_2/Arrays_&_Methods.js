// Arrays & Methods

// Declaring arrays ([], new Array()).
const fruits = ["apple", "banana", "mango"];

console.log(fruits); //  ["apple", "banana", "mango" ]

const newfruits = new Array("grapes", "pineapple", "watermelon");

console.log(newfruits) // [ "grapes", "pineapple", "watermelon" ]

const numbers = new Array(4);

console.log(numbers) // [ <4 empty slots> ]

// Accessing elements by index.

const students = ["Ali", "Ahmad", "Umar"];

console.log(students[0]) // Ali
console.log(students[1]) // Ahmad
console.log(students[2]) // Umar
console.log(students[4]) // undefined because index doesn't exist.

// modification of array elements
students[1] = "Mustafa"
console.log(students) // [ "Ali", "Mustafa", "Umar" ]


// Common methods:

// push, pop, shift, unshift

//  map, filter, reduce, forEach, find, some, every, includes, indexOf

const nums = [1, 2, 3, 4, 5]
console.log("Before push:", nums) // [ 1, 2, 3, 4, 5]
nums.push(6)
console.log("After push:", nums) // [ 1, 2, 3, 4, 5, 6 ]

const rand_nums = [2, 3, 5, 6, 7]
console.log("Before pop:", rand_nums) // [2, 3, 5, 6, 7]
rand_nums.pop()
console.log("After pop:", rand_nums) // [2, 3, 5, 6]

const student_list = ["Ali", "Ahmad", "Umar", "Mustafa", "Mujtaba"]
console.log("Before shift:", student_list) // [ "Ali", "Ahmad", "Umar", "Mustafa", "Mujtaba" ]
student_list.shift()
console.log("After shift:", student_list) // ["Ahmad", "Umar", "Mustafa", "Mujtaba" ]

const perfect_nums = [1, 6, 9, 4, 2]
console.log("Before unshift", perfect_nums) // [ 1, 6, 9, 4, 2 ]
perfect_nums.unshift(3)
console.log("After unshift", perfect_nums) // [ 3, 1, 6, 9, 4, 2 ]

const map_num = [1, 3, 4, 5, 6]
console.log(map_num.map(num => num ** 4)) // [ 1, 81, 256, 625, 1296 ]

const filter_num = [1, 22, 33, 11, 12, 35, 41]
console.log(filter_num.filter(filters => filters % 2 !== 0)) // [ 1, 33, 11, 35, 41 ]

const reduce_num = [1, 2, 3, 4, 8, 9, 5]

console.log(reduce_num.reduce((subtract, num) => subtract - num, 1)) // -31

const foreach_num = [1,2,3,5]
foreach_num.forEach(eachnum => console.log(eachnum)) // 1, 2, 3, 5

const find_age = [23, 18, 21, 17, 16, 22]
console.log(find_age.find(finding_age => finding_age > 20))  // 23

const some_num = [1,2, 3, 5, 6, 9, 11]

console.log(some_num.some(some_nums => some_nums + 1 === 5)) // false(will be true if we add '4' element before or after'5').

const every_num = [1,2, 3, 5, 4, 6, 9, 11]

console.log(every_num.every(every_nums => every_nums + 1 === 5)) // false

const students_list =  ["Ali", "Ahmad", "Umar", "Mustafa", "Mujtaba"]

const is_student_available = students_list.includes("Umar")

console.log(is_student_available) // true

const my_items = ["mobile", "laptop", "watch", "charger"]

const my_items_position = my_items.indexOf("watch")

console.log(my_items_position) // index: 2
console.log(my_items.indexOf("bag")) // -1 means index not found

// Spread operator with arrays ([...arr]).

const first_array = [5,6,7,8,9]
const copy_array = [1,2,3,4,...first_array]

console.log(copy_array) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Practice:

//  Create an array of numbers and:

//         Double each number with map.

//         Filter only even numbers.

//         Reduce to get the sum.

//         Check if array includes a value.

const practice_nums = [1,2,3,4,5,6,7,8,9,10]
console.log(practice_nums.map(doubling_num => doubling_num * 2)) // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
console.log(practice_nums.filter(filtering => filtering % 2 === 0)) // [ 2, 4, 6, 8, 10 ]
console.log(practice_nums.reduce((number, sum) => number + sum, 0)) // 55
console.log(practice_nums.includes(5)) // true
