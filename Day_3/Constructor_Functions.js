// Constructor Functions
// Function that returns objects when called with new.

function Person(name){

}

const Person_info = new Person("Umar")
console.log(Person_info) // Object {   }


// Add properties using this.

function student(name, age){
    this.name = name
    this.age = age
}

const student_info = new student("Umar khan", 22)
console.log(student_info) // Object { name: "Umar khan", age: 22 }

// Add shared methods using .prototype.

function fruit(type, taste){
    this.type = type
    this.taste = taste

}

fruit.prototype.eat = function(){
    console.log(`The fruit ${this.type} have ${this.taste} taste!`)
}

const fruit1 = new fruit("Apple", "Sweet")
const fruit2 = new fruit("Orange", "Sour")

fruit1.eat() // The fruit Apple have Sweet taste!
fruit2.eat() // The fruit Orange have Sour taste!


// Practice:

//     Create Person constructor with name and age.

//     Add greet() on prototype.

//     Create multiple persons and test shared method.


function person(name, age){
    this.name = name
    this.age = age
}

person.prototype.greet = function(){
    console.log(`The person ${this.name} of age ${this.age} said Assalam o alaikum!`)
}
person.prototype.bye = function(){
    console.log(`The person ${this.name} of age ${this.age} said Khuda hafiz!`)

}
const person1 = new person("Umar", 22)
const person2 = new person("Ali", 19)
const person3 = new person("Ahmad", 24)
const person4 = new person("Arshad", 25)

person1.greet() // The person Umar of age 22 said Assalam o alaikum!
person2.greet() //The person Ali of age 19 said Assalam o alaikum!
person3.bye() // The person Ahmad of age 24 said Khuda hafiz!
person4.bye() // The person Arshad of age 25 said Khuda hafiz!
