    // Practice Task (Mini Project)

    // Build a student manager:

    //     Store students in an array of objects { name, age, grade }.

    //     Functions:

    //         Add a new student.

    //         Find students above a certain grade.

    //         Calculate average age using reduce.

    //         Print student names using a loop.
let students = [
  { name: "Ali", age: 20, grade: 85 },
  { name: "Ahmad", age: 22, grade: 70 },
  { name: "Umar", age: 19, grade: 90 }
];
function addStudent(name, age, grade) {
  students.push({ name, age, grade });
}

function findAboveGrade(minGrade) {
  return students.filter(student => student.grade > minGrade);
}


function averageAge() {
  let total = students.reduce((sum, student) => sum + student.age, 0);
  return total / students.length;
}


function printNames() {
  for (let student of students) {
    console.log(student.name);
  }
}

addStudent("Mustafa", 21, 95);
console.log("Above 90:", findAboveGrade(90)); // Object { name: "Mustafa", age: 21, grade: 95 }
console.log("Average Age:", averageAge()); // Average Age: 20.5
printNames(); // Ali, Ahmad, Umar, Mustafa  