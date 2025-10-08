// Prototypes & Inheritance

// Understand prototype chain (__proto__).
const grandpa = {
    g_name: "Ali",
    greet: "Assalam o alaikum",
    greeting: function(){
        return `${this.g_name} said ${this.greet}`
    }
}
const dad = {
    __proto__: grandpa, // Gets everthing from grandpa
    d_name: "ahmad",
    d_age: 28
}

const son = {
    __proto__: dad, // gets everything from dad and grandpa
    s_name:"Arshad"

}

console.log(son.g_name) // Ali
console.log(son.d_name) // Ahmad
console.log(son.s_name) // arshad
console.log(son.d_age) // 28
console.log(son.greeting()) // Ali said Assalam o alaikum

// Every object in JS inherits from Object.prototype.

const student_name = {name: "Umar khan"}
const std_len = student_name.length
const array = [1,2,3]
const time = new Date()

console.log(std_len) // [object Object]
console.log(array.propertyIsEnumerable()) // false
console.log(time.valueOf()) // 1759581994097
console.log(Object.prototype) // Object { … }
// Add methods to constructor functions using prototype.

function Car(brand, model, color){
    this.brand = brand
    this.model = model
    this.color = color
}
Car.prototype.view = function(){
    console.log(`The brand is ${this.brand} and the model is ${this.model} and the color is ${this.color}`)
}

const first_viewer = new Car("Toyota",2003, "Yellow")
const second_viewer = new Car("Corolla",2006, "Green")
first_viewer.view() // The brand is Corolla and the model is 2006 and the color is Green
second_viewer.view() // The brand is Toyota and the model is 2003 and the color is Yellow


//Practice:

    // Create a Car constructor with make and model.

    // Add a method drive() via prototype.

    // Create two car objects and call drive().

function car(make, model){
    this.make = make
    this.model = model
}

car.prototype.drive = function(){
    console.log(`${this.make} of model ${this.model} is driving.`)
}
const first_driver = new car("Toyota", 2015)
const second_driver = new car("Honda", 2006)

first_driver.drive() // Toyota of model 2015 is driving.
second_driver.drive() // Honda of model 2006 is driving.
