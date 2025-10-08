// Prototype chain

class customer{
    constructor(name, item){
        this.name = name
        this.item = item
    }
    buy(){
        return `${this.name} brought ${this.item} item.`
    }
}

class user extends customer{
    constructor(name, item){
        super(name, item)
    }
    buy_item(price){
        return `${this.name} brought ${this.item} item on price: ${price}`

    }
}

const buyer = new user("umar khan", "laptop")
console.log(buyer.buy_item(20000)) // umar khan brought laptop item on price: 20000

//Prototype chain
// buyer → user.prototype → customer.prototype → Object.prototype → null

console.log(buyer.__proto__ === user.prototype) // true
console.log(user.prototype.__proto__ === customer.prototype) // true


// Constructor functions vs Classes

// Constructor functions(old way)
function Person(name, age){
    this.name = name
    this.age = age

    Person.prototype.info = function(){
        return `${this.name} is ${this.age} years old!`
    }
}
const male = new Person("Umar khan", 22)
console.log(male.info()) // Umar khan is 22 years old!

// Constructor classes(new or modern way)
class Car{
    constructor(driver, brand, model){
        this.driver = driver
        this.brand = brand
        this.model = model
    }
    drive(){
        return `${this.driver} is driving ${this.brand} which is of model ${this.model}`
    }
}
const car = new Car("Umar", "Toyota", 2006)
console.log(car.drive()) // Umar is driving Toyota which is of model 2006


// Encapsulation, inheritance, polymorphism, abstraction

// Encapsulation
class Login{
    #password // private
    constructor(username, userPass){
        this.username = username
        this.#password = userPass
    }
    User_login(name, pass){
         name = this.username 
         pass = this.#password
        if(name === "Umar khan" && pass === "hello"){
            return `You have successfully logged in.`
        }
        else{
            return `Login in failed.`
        }
    }
}
// let #password = "new password" // SyntaxError: unexpected token: private identifier
// console.log(#password)
// console.log(#password) // SyntaxError: private names aren't valid in this context
const login1 = new Login("Umar khan", "hello")
const login2 = new Login("Umar khan", "hillo")
console.log(login1.User_login()) // You have successfully logged in.
console.log(login2.User_login()) // Login in failed.

// inheritance
class vehicle{
    constructor(brand, model, color){
        this.brand = brand
        this.model = model
        this.color = color
    }
    start(){
        return `The ${this.brand} car started!`
    }
     stop(){
        return `The ${this.brand} car stopped!`
    }
}
class Toyota extends vehicle{
    constructor(brand, model, color){
        super(brand, model, color)
    }
    drive(){
        return `This car is manufactured by ${this.brand} with ${this.model} of color ${this.color}`
    }
}

const car_driver = new Toyota("Toyota", 2008, "yellow") 
console.log(car_driver.start()) // The Toyota car started!
console.log(car_driver.stop()) // The Toyota car stopped!
console.log(car_driver.drive()) // This car is manufactured by Toyota with 2008 of color yellow.


// polymorphism
class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
            return `The ${this.name} made a sound!`
    }
}
class Bird extends Animal{
    constructor(name){
        super(name)
    }
    speak(){
            return `The ${this.name} said Tweet Tweet!`

    }
}
class Dog extends Animal{
    constructor(name){
        super(name)
    }
    speak(){
            return `The ${this.name} said Woof Woof!`

    }
}
const bird = new Bird("BulBul")
const dog = new Dog("bulldog ")
console.log(bird.speak()) // The BulBul said Tweet Tweet!
console.log(dog.speak()) // The bulldog said Woof Woof!

// abstraction
class Company{
    #bonus
    #salary
    constructor(employee, extra, paid){
        this.employee = employee
        this.#bonus = extra
        this.#salary = paid
    }
    paying(){
        let money = this.#salary + this.#bonus
        return `you got paid: ${money}`

    }
}
const company = new Company("Umar khan", 2000, 30000)
console.log(company.paying())  // you got paid: 32000

// static method
class Distance {
    // static
    static calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }
    // instance
    constructor(value) {
        this.value = value;
    }
    
    square() {
        return this.value ** 2;
    }
}

// Static usage
console.log(Distance.calculateDistance(3, 2, 3, 4)); // 2

// Instance usage
const distance = new Distance(6);
console.log(distance.square()); // 36

// Where to Use OOP vs Functional Approach
// OOP Approach - When you have:
// - Complex state management
// - Clear entity relationships
// - Need for polymorphism
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(product, quantity) {
        this.items.push({ product, quantity });
    }
    
    calculateTotal() {
        return this.items.reduce((total, item) => 
            total + (item.product.price * item.quantity), 0
        );
    }
}

// Functional Approach - When you have:
// - Data transformations
// - Pure functions
// - Simple data flow
// Same as above one but functional approach
const calculateTotal = (items) => 
    items.reduce((total, item) => 
        total + (item.product.price * item.quantity), 0
    );

const addItem = (cart, product, quantity) => [
    ...cart,
    { product, quantity }
];

class Book {
    static totalBooks = 0;
    
    constructor(title, author, ISBN, availableCopies = 1) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.availableCopies = availableCopies;
        Book.totalBooks++;
    }
    
    borrow() {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            return true;
        }
        return false; 
    }
    
    returnBook() {
        this.availableCopies++;
        return true;
    }
}
class Author {
    constructor(name, bio = "") {
        this.name = name;
        this.bio = bio;
        this.books = [];
    }
    
    addBook(book) {
        this.books.push(book);
    }
}
class Library {
    constructor(name) {
        this.name = name;
        this.books = new Map();
    }
    
    addBook(book) {
        this.books.set(book.ISBN, book);
        if (book.author instanceof Author) {
            book.author.addBook(book);
        }
    }
    
    findBook(ISBN) {
        return this.books.get(ISBN) || null;
    }
}
const author1 = new Author("J.K. Rowling", "British author best known for Harry Potter series");
const author2 = new Author("George Orwell", "English novelist and essayist");

const book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "978-0439708180", 3);
const book2 = new Book("Harry Potter and the Chamber of Secrets", author1, "978-0439064873", 2);
const book3 = new Book("1984", author2, "978-0451524935", 1)
const myLibrary = new Library("City Central Library");
myLibrary.addBook(book1)
myLibrary.addBook(book2)
myLibrary.addBook(book3)
console.log(`Total books created: ${Book.totalBooks}`);
console.log(`Available copies of ${book1.title}: ${book1.availableCopies}`);

// Borrow a book
if (book1.borrow()) {
    console.log(`Successfully borrowed: ${book1.title}`);
} else {
    console.log(`No copies available: ${book1.title}`);
}
console.log(`Available copies after borrowing: ${book1.availableCopies}`);
book1.returnBook();
console.log(`Available copies after returning: ${book1.availableCopies}`);
const foundBook = myLibrary.findBook("978-0451524935");
if (foundBook) {
    console.log(`Found book: ${foundBook.title} by ${foundBook.author.name}`);
} else {
    console.log("Book not found");
}
const book4 = new Book("Test Book", author1, "978-0000000000", 0);
if (!book4.borrow()) {
    console.log(`Cannot borrow ${book4.title} - no copies available`);
}
console.log(`Library: ${myLibrary.name}`)
console.log("Books in collection:");
myLibrary.books.forEach((book, ISBN) => {
    console.log(`- ${book.title} (ISBN: ${ISBN}) - Available: ${book.availableCopies}`);
});

console.log(`Author: ${author1.name}`)
console.log(`Bio: ${author1.bio}`)
console.log("Books by this author:")
author1.books.forEach(book => {
    console.log(`- ${book.title}`);
});
    // Final Practice Task

    // Combine concepts:
    // Use inheritance for Ebook class extending Book.

    // Use a mixin for downloadable behavior.

    // Use polymorphism (borrow() behaves differently in Ebook).

class book {
    static totalBooks = 0;
    
    constructor(title, author, ISBN, availableCopies = 1) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.availableCopies = availableCopies;
        Book.totalBooks++;
    }
    
    borrow() {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            return true;
        }
        return false;
    }
    
    returnBook() {
        this.availableCopies++;
        return true;
    }
}

const DownloadableMixin = (BaseClass) => class extends BaseClass {
    download() {
        return `Downloading: ${this.title}`;
    }
    
    getDownloadSize() {
        return "5MB";
    }
};

class Ebook extends DownloadableMixin(book) {
    constructor(title, author, ISBN, fileFormat = "PDF") {
        super(title, author, ISBN, 999);
        this.fileFormat = fileFormat;
    }
    
    borrow() {
        return `Ebook ${this.title} is always available for digital borrowing`;
    }
}

class author {
    constructor(name, bio = "") {
        this.name = name;
        this.bio = bio;
        this.books = [];
    }
    
    addBook(book) {
        this.books.push(book);
    }
}

class library {
    constructor(name) {
        this.name = name;
        this.books = new Map();
    }
    
    addBook(book) {
        this.books.set(book.ISBN, book);
        if (book.author instanceof Author) {
            book.author.addBook(book);
        }
    }
    
    findBook(ISBN) {
        return this.books.get(ISBN) || null;
    }
}

const a1 = new author("J.K. Rowling", "British author");
const a2 = new author("George Orwell", "English novelist");

const physicalBook = new book("Harry Potter", a1, "978-0439708180", 3);
const ebook = new Ebook("1984", a2, "978-0451524935", "EPUB");

const mL = new library("Digital Library");
mL.addBook(physicalBook);
mL.addBook(ebook);
console.log(physicalBook.borrow());
console.log(ebook.borrow());
console.log(ebook.download());
console.log(ebook.getDownloadSize());
myLibrary.books.forEach((book, ISBN) => {
    console.log(`${book.title} - Format: ${book.fileFormat || 'Physical'}`);
});

console.log(`\nTotal books created: ${book.totalBooks}`);