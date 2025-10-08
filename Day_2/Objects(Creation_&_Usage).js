// Object literals { key: value }.
 
const student_info = {
    name: "Umar khan",
    age: 22,
    is_active: true,
    "is student": false
}
console.log(student_info) // Object { name: "Umar khan", age: 22, is_active: true }

// Accessing properties (dot vs bracket).

console.log(student_info.name) // Umar khan
console.log(student_info["age"]) // 22
console.log(student_info["is_active"]) // true
console.log(student_info["is student"]) // false


// Shorthand property names.

const car_name = "Toyota"
const car_model = 2003
const car_color = "yellow"

const car = {
    car_name,
    car_model,
    car_color,
}

console.log(car) //  { car_name: "Toyota", car_model: 2003, car_color: "yellow"}
console.log(car.car_name) // Toyota

// Destructuring (const {name, age} = obj).
const {name, age, is_active} = student_info

console.log(name) // Umar khan
console.log(age) // 22
console.log(is_active) // true

// Destructuring with different variable names and with default values

const {car_name: cn, car_model: cm, car_color: cc,car_price = 15000} = car

console.log(cn) // Toyota
console.log(cm) // 2003
console.log(cc) // yellow
console.log(car_price) // 15000


// Nested objects.
const teacher_info = {
    teacher_name: "Ali",
    teacher_age: 26,
    subjects_teach:{
        subject1: "OOP",
        subject2: "Calculus",
        subject3: "Software engineering"
    },
    extra_subjects: ["JavaScript", "SQL", "Python"]
}
console.log(teacher_info) // { name: "Ali", age: 26, subjects_teach: {…}, extra_subjects: (3 elements) […] } copied from inspect
console.log(teacher_info.subjects_teach.subject3) // Software engineering
console.log(teacher_info.extra_subjects[1]) // SQL



// Destructuring nested objects
const {teacher_name, teacher_age, subjects_teach:{
    subject1, subject3
}, extra_subjects} = teacher_info

console.log(teacher_name) // Ali
console.log(teacher_age) // 26
console.log(subject1) // OOP
console.log(extra_subjects) //  ["JavaScript", "SQL", "Python" ]

// Practice:

//     Create a student object with name, age, subjects.

//     Access properties.

//     Use destructuring to extract values.

const student = {
    std_name: "Umar khan",
    std_age: 22,
    subjects: ["Javascript", "Node.js", "Express.js", "Next.js"]
}

console.log(student.std_name) // Umar khan
console.log(student.std_age) // 22
console.log(student.subjects[1]) // Node.js

const {std_name, std_age, subjects} = student

console.log(std_name) // Umar khan
console.log(std_age) // 22
console.log(subjects) // [ "Javascript", "Node.js", "Express.js", "Next.js" ]