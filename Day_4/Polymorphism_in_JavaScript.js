// Polymorphism in JavaScript
// Concept: same method name, different behavior depending on object/class.
// Method overriding in subclasses.
class student{
    constructor(name, age ,subject){
        this.name = name
        this.age = age
        this.subject = subject
    }
    study(){
        return `${this.name} is studying ${this.subject}.`
        
    }
    std_age(){
        return `${this.name} is ${this.age} years old.`
        
    }

}

class umar extends student{
    constructor(name, age, subject){
        super(name, age, subject)
    }
     study(){ // Method overriding
        return `${this.name} is studying ${this.subject}.`
        
    }
     std_age(){
        return `${this.name} is ${this.age} years old.` 
    }
}

const std = new student("Ali", 22, "python")
const umar_std = new umar("Umar", 23, "Javascript")
console.log(std.study()) // Ali is studying python.
console.log(std.std_age()) // Ali is 22 years old.
console.log(umar_std.study()) // Umar is studying Javascript.
console.log(umar_std.std_age()) // Umar is 23 years old.


// Practice:

//     Create Shape class with getArea().

//     Extend into Circle and Rectangle, override getArea().

//     Call method on different objects and see different outputs.

class Shape{
        constructor(width, height){
            this.height = height
            this.width = width
        }
    getArea(){
        return `This shape have width: ${this.width} and height: ${this.height}.`
    }
}

class Circle extends Shape{
    constructor(width, height, radius){
        super(width, height)
        this.radius = radius
    }
    getArea(){
        return `The height of the circle is: ${this.height} and the width of the circle is: ${this.width} and its radius is: ${this.height / this.radius || this.width / this.radius}`
    }
}
class Rectangle extends Shape{
    constructor(width, length ){
        super(width)
        this.length = length 
    }
    getArea(){
        return `The length  of the rectangle is: ${this.length} and the width of the rectangle is: ${this.width}.`

    }
}

const shape = new Shape(22, 25)
console.log(shape.getArea()) // This shape have width: 22 and height: 25.

const circle = new Circle(25, 25, 20)
console.log(circle.getArea()) // The height of the circle is: 25 and the width of the circle is: 25 and its radius is: 1.25

const rectangle = new Rectangle(20, 26)
console.log(rectangle.getArea()) // The length  of the rectangle is: 26 and the width of the rectangle is: 20.