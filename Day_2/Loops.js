// Loops
// Traditional for loop.
const array = [1,2,3,4,5,6,7]
for(let i=0; i <= array.length; i++){
    console.log(i) // 0,1,2,3,4,5,6,7
}


// for...of for arrays.
const colors = ["red", "blue", "green", "purple"]
for(const a of colors){
    console.log(a) // red, blue, green, purple
}

for(const [i, color] of colors.entries()){
    console.log(`${i}, ${color}`)
}

// for...in for objects.
const student = {
    name: "Mustafa khan",
    age: 20,
    grade: "A",
    subjects: ["calculus", "Java"]
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}

// while and do...while.

// let userInput = "";
// while (userInput !== "yes" && userInput !== "no") {
//     userInput = prompt("Please enter 'yes' or 'no':");
//     console.log("You entered:", userInput); // yes or no
// }

const numbers = [10, 20, 30];
let i = 0;
while (i < numbers.length) {
    console.log("Number:", numbers[i]);
    i++;
}

// Practice:

//     Loop through a student array with for...of.

//     Loop through student object properties with for...in.

const student_array = ["Ali", "Ahmad", "salman"]

for(const s of student_array){
    console.log(s) // Ali, Ahmad, salman
}

const student_obj = {
    name: "Mujtaba khan",
    age: 18,
    is_student: true
}

for(const o in student_obj){
    console.log(`Student information: ${o}: ${student_obj[o]}`)
}