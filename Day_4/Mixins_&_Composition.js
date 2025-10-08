// Mixins & Composition
// Mixins: reusable behavior that can be added to multiple classes.

const CanEat = {
        eat(){
            console.log(`${this.name} is eating meat.`)
        }
}

const CanDrink = {
        drink(){
            console.log(`${this.name} is drinking milk.`)
        }
}

const CanSleep = {
        sleep(){
            console.log(`${this.name} is sleeping in hole.`)
        }
}

class Dog{
    constructor(name){
        this.name = name
    }
}

class Cat{
    constructor(name){
        this.name = name
    }
}

class Rabbit{
    constructor(name){
        this.name = name
    }
}

Object.assign(Dog.prototype, CanEat)
Object.assign(Cat.prototype, CanDrink)
Object.assign(Rabbit.prototype, CanSleep)

const dog = new Dog("dog")
const cat = new Cat("cat")
const rabbit = new Rabbit("rabbit")

dog.eat() // dog is eating meat.
cat.drink() // cat is drinking milk.
rabbit.sleep() // rabbit is sleeping in hole.   

// Composition
// Composition: combine small, focused classes/functions instead of deep inheritance.

class studying{
    study(name ,subject){
        return `${name} is studying ${subject}`
    }
}

class sport{
    playing(name, sports){
        return `${name} is good at playing ${sports}`
    }
}

class eating{
    eat(name, dish){
        return `${name} is eating ${dish}`
    }
}

class person{
    constructor(name){
        this.name = name
        this.studying = new studying()
        this.sport = new sport()
        this.eating = new eating()
    }
    study(subject){
        return this.studying.study(this.name, subject)
    }
     playing(sports){
        return this.sport.playing(this.name, sports)
    }
     eat(dish){
        return this.eating.eat(this.name, dish)
    }
}

const user1 = new person("Umar khan")
const user2 = new person("Ali khan")
const user3 = new person("Bilal khan")

console.log(user1.study("JavaScript")) // Umar khan is studying JavaScript
console.log(user2.playing("football")) // Ali khan is good at playing football
console.log(user3.eat("Biryani")) // Bilal khan is eating Biryani


// Practice:

//     Create CanFly mixin with fly() method.
//     Add to Bird and Airplane classes.
//     Test behavior.

const CanFly = {
    fly(){
        return `${this.name} is flying in the air!`
    }
}

class Bird{
    constructor(name){
        this.name = name
    }

}

class Airplane{
    constructor(name){
        this.name = name
    }
    
}

Object.assign(Bird.prototype, CanFly)
Object.assign(Airplane.prototype, CanFly)

const bird = new Bird("BulBul")
const airplane = new Airplane("Boeing 777")
console.log(airplane.fly()) // Boeing 777 is flying in the air!
console.log(bird.fly()) // BulBul is flying in the air!


