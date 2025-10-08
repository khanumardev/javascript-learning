// Abstraction Patterns
// Hiding details, exposing only what’s necessary.
class student_fees{
   #OverDueFees
    constructor(name, fees){
        this.name = name
        this.fees = fees
        this.#OverDueFees = 2000
    }
    #get_fees(){ // Hiding details, exposing only what’s necessary.
        let ExtraFees = this.fees + this.#OverDueFees
        console.log(`Total fees with overdue fees is:${ExtraFees}`)
    }
    pay_fees(){
this.#get_fees()
        console.log(`${this.name} have paid the fees. Thank you.`);
        

    }
}

const std_paying = new student_fees("umar khan", 2000)
// console.log(std_paying.#get_fees()) // SyntaxError: reference to undeclared private field or method #get_fees
std_paying.pay_fees() // Total fees paid with overdue fees is:4000, umar khan have paid the fees. Thank you.   
// console.log(student_fees.#OverDueFees) //  SyntaxError: reference to undeclared private field or method #OverDueFees

// Practice:

//     Create BankAccount class with private balance.

//     Add deposit() and withdraw() methods.

//     Prevent direct modification of balance.

class BankAccount{
    #balance
    constructor(money){
        this.money = money
        this.#balance = 0
    }
    deposit(){
     this.#balance += this.money
        return `You have deposit ${this.money} to your account. current balance ${this.#balance}`
    }
    withdraw(){
        if(this.#balance <= 0){
            return `Sorry, your account doesn't have any money. current Balance: ${this.#balance}`
        }
        else if(this.#balance < this.money){
            return `You don't have this much money in your account. current Balance: ${this.#balance}`
        }
        else{
            this.#balance -= this.money
            return `You have withdraw ${this.money} from your account. current Balance: ${this.#balance}`
        }
    }
}
// let #balance = 2000 // Variable declaration not allowed at this location.
// console.log(#balance) // SyntaxError: private names aren't valid in this context
const user = new BankAccount(4000)
console.log(user.deposit()) // You have deposit 4000 to your account. current balance 4000
console.log(user.withdraw()) // You have withdraw 4000 from your account. current Balance: 0
