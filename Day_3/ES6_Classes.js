// ES6 Classes

// Syntax: class ClassName { constructor(){} }.

class student{
constructor(name, semester){
    this.name = name
    this.semester = semester 
}
}

// Class methods.

class person{
constructor(name, current_age){
    this.name = name
    this.current_age = current_age
}
sayhi(){
    return `${this.name} said Hi, and asked about your age and you answered its ${this.current_age}!`
}
saybye(){
    return `${this.name} said bye, and thanked you for giving your age.`
}
}
const person_hi = new person("Ahmad", 19)
const person_bye = new person("Ahmad")

console.log(person_hi.sayhi())
console.log(person_bye.saybye())

// Getters and setters
class student_name{
    constructor(name, age, isStudent){
        this.name = name
        this.age = age
        this._isStudent = isStudent
    }
    set student_validation(student){
        if(student.includes("Umar") || student.includes("Ali")){
            this._isStudent = student
            console.log("You are the student of this college")
        }
        else{
            console.log("You are not the student of this college")
        }
    }
    get student_validation(){
        return this._isStudent
    }
}

const student1 = new student_name("Umar", 22)
const student2 = new student_name("Ali", 19)
student1.student_validation = "Umar" // You are the student of this college
student2.student_validation = "Ahmad" // You are not the student of this college


// Practice:

// Create User class with name and email.

// Add getInfo() method.

// Add a getter for maskedEmail.


class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getInfo() {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
    get maskedEmail() {
        if (!this.email) return '';
        
        const [localPart, domain] = this.email.split('@');
        
        if (localPart.length <= 2) {
            return `${localPart.charAt(0)}***@${domain}`;
        }
        
        const maskedLocal = localPart.charAt(0) + 
                           '*'.repeat(localPart.length - 2) + 
                           localPart.charAt(localPart.length - 1);
        
        return `${maskedLocal}@${domain}`;
    }
}

const user1 = new User("Umar", "Umar@gmail.com")
const user2 = new User("Ali", "ali@test.org");
const user3 = new User("Ahmad", "ahmad@gmail.com")

console.log(user1.getInfo()); 
console.log(user1.maskedEmail);

console.log(user2.getInfo()); 
console.log(user2.maskedEmail)

console.log(user3.getInfo());
console.log(user3.maskedEmail)