class user {
    // Public fields
    name = "Anonymous";
    email = "umarkhan@example.com";
    
    constructor(name, email) {
        this.name = name;
        this.email = email; 
    }
}

const users = new user("Umar", "Umarkhan@gmail.com");
console.log(users.name); // Umar
console.log(users.email); // Umarkhan@gmail.com

users.name = "Hacker";  
users.email = "hacker@gmail.com";

console.log(users.name); // Hacker
console.log(users.email);  // hacker@gmail.com



class User {
    // Private fields start with #
    #password;
    #cnic;   
    
    constructor(name, email, password) {
        this.name = name;    // Public
        this.email = email;  // Public  
        this.#password = password; // Private
        this.#cnic = "123-45-6789"; // Private
    }
    
    showPrivate() {
        return `Password: ${this.#password}, cnic: ${this.#cnic}`;
    }
}

const _user = new User("Ali", "Umar@gmail.com", "not a passoword");
console.log(_user.name); // Ali
console.log(_user.email);  // Umar@gmail.com

// Private fields cause ERRORS:
// console.log(_user.#password); //  SyntaxError: reference to undeclared private field or method #password
// console.log(_user.#cnic);      // SyntaxError: reference to undeclared private field or method #cnic
console.log(_user.showPrivate()); // Password: not a passoword, cnic: 123-45-6789

// Use getters/setters to control access.
class student {
    #password;
    #loginAttempts = 0;
    #isLocked = false;
    
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.#password = password;
    }
    get loginAttempts() {
        return this.#loginAttempts;
    }
    
    get isLocked() {
        return this.#isLocked;
    }
    set password(newPassword) {
        if (newPassword.length >= 6) {
            this.#password = newPassword;
            console.log("Password updated successfully");
        } else {
            console.log("Password must be at least 6 characters");
        }
    }
}

const Student = new student("Umar", "umar123@gmail.com", "oldPassword");
console.log(Student.loginAttempts); // 0
console.log(Student.isLocked);      // false

// console.log(Student.#password); // SyntaxError: reference to undeclared private field or method #password

Student.password = "short";     // "Password must be at least 6 characters"
Student.password = "newLongPassword"; // "Password updated successfully"

// Practice:

//     Add private field #password to User.

//     Add methods setPassword() and checkPassword().

class _User_ {
    #password;

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    set setPassword(newPassword) {
    this.#password = newPassword;
    console.log(`Password set for user: ${this.name} with email: ${this.email} to ${this.#password}`);
  }
     checkPassword(inputPassword) {
    return this.#password === inputPassword;
  }
}

const Users = new _User_('umar khan', "KhanUmarkhan@gmail.com")
Users.setPassword = "newpassword" // Password set for user: umar khan with email: KhanUmarkhan@gmail.com to newpassword
console.log(Users.checkPassword("newpassword")) // true
