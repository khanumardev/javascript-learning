// Inheritance with Classes
// extends keyword for subclassing.
class Animal{
    constructor(animal,sound){
        this.animal = animal
        this.sound = sound
    }
    speak(){
        return `${this.animal} makes ${this.sound} sound.`
    }
}

class Dog extends Animal{
    
}
class Cat extends Animal{

}
const dog = new Dog("Dog", "woof")
const cat = new Cat("cat", "Meoww")
console.log(dog.speak()) // Dog makes woof sound.
console.log(cat.speak()) // cat makes Meoww sound.

// super() for calling parent constructor.

class college{
    constructor(clgName){
        this.clgName = clgName
    }
    admission(){
        return `Welcome to ${this.clgName}, dear ${this.stdName}.`
    }
}

class student extends college{
    constructor(clgName, stdName){
        super(clgName)
        this.stdName = stdName
    }
}
const std1 = new student("ECS", "Mustafa")
const std2 = new student("GCMS", "Umar khan")

console.log(std1.admission()) // Welcome to ECS, dear Mustafa.
console.log(std2.admission()) // Welcome to GCMS, dear Umar khan.

// Practice:

//     Extend User into Admin.

//     Add extra property role.

//     Override method getInfo() in Admin.

class User{
    constructor(name, email){
        this.name = name
        this.email = email
        this.isactive = true
    }
    getinfo(){
        return `User: ${this.name} | Email: ${this.email} | isActive: ${this.isactive? 'Yes' : 'No'}`
    }
    login(){
        return `${this.name} loggedin`
    }
     logout(){
        return `${this.name} loggedOut`
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email)
    }
}

const admin = new Admin("Umar", "khanumarkhan@gmail.com")
const admin1 = new Admin("Ahmad")
const admin2 = new Admin("Ali")
console.log(admin2.logout()) // Ali loggedOut
console.log(admin1.login()) // Ahmad loggedin
console.log(admin.getinfo()) // User: Umar | Email: khanumarkhan@gmail.com | isActive: Yes  