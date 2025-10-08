// this keyword
// this in global scope.
console.log(this) // window
console.log(this === window) // true

this.mywindow = "Hello i am window."
console.log(window.mywindow)
// this inside objects.
const person = {
    name: "Umar khan",
    age: 22,
    sayhello: function(){
        console.log(`${this.name} said hello.`)
    },
    birthday: function(){
        this.age++
        console.log(`${this.name} is now ${this.age} years old!`)
    }
}
console.log(person.sayhello()) // Umar khan said hello.
console.log(person.birthday()) // Umar khan is now 23 years old!
console.log(person.age) // 23(updated)

// this inside functions vs arrow functions.

function regularFunction() {
    console.log("Regular function this:", this);
}

const obj = {
    method: regularFunction,
    name: "Test Object"
};

regularFunction(); // 'this' is Window.
obj.method(); // 'this' is obj (the object that called it)


const arrowFunction = () => {
    console.log("Arrow function this:", this);
};

const obj2 = {
    method: arrowFunction,
    name: "Test Object"
};

arrowFunction(); // 'this' is Window
obj2.method(); // 'this' is still from Window

// Binding this with .call(), .apply(), .bind().
function HelloUsers(greet, city){
    return `${this.name} said ${greet} from ${city}`
}
function sayHello(){
    return `Hello, ${this.name}.`
}
const person1 = {
    name: "Umar khan"
}
const person2 = {
    name: 'Ali'
}
const person3 = {
    name: "Arshad"
}
const person4 = {
    name: "Ahmad"
}
const person5 = {
    name: "shehzad"
}
const person4_greet = sayHello.bind(person4)
const person5_greet = sayHello.bind(person5)
console.log(HelloUsers.call(person1, "hello", "islamabad")) // Umar khan said hello from islamabad
console.log(HelloUsers.call(person2, "hi", "karachi")) // Ali said hi from karachi
console.log(HelloUsers.apply(person3, ["hello", "Mingora"])) // Arshad said hello from Mingora
console.log(person4_greet())
console.log(person5_greet())


// Practice:

//     Create an object with a method using this.

//     Copy the method to another object and test this.

//     Use bind to fix context issues.

const person_1 = {
    name: "Umar khan",
    age: 30,
    introduce: function() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    },
    celebrateBirthday: function() {
        this.age++;
        return `Happy birthday! I'm now ${this.age} years old.`;
    }
};
console.log("Original object:");
console.log(person_1.introduce()); // "Hello, I'm Umar khan and I'm 30 years old."
console.log(person_1.celebrateBirthday()); // "Happy birthday! I'm now 31 years old."
console.log(person_1.introduce()); // "Hello, I'm Umar khan and I'm 31 years old."

const person_2 = {
    name: "Ali",
    age: 25
};
// Copy the introduce method
person_2.introduce = person_1.introduce;
console.log(person_2.introduce()); // "Hello, I'm Ali and I'm 25 years old."

const hello_Person1 = person_1.introduce.bind(person_1);
console.log(hello_Person1()); // Hello, I'm Umar khan and I'm 31 years old.

const hello_Person2 = person_1.introduce.bind(person_2);
console.log(hello_Person2());  // Hello, I'm Ali and I'm 25 years old.