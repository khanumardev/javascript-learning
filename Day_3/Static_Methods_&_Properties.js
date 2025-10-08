// Static Methods & Properties
// Belong to class, not instances.
class _User_ {
    static species = "Human"; // Static property
    
    static greet() { // Static method
        return "User said hello!";
    }
}
console.log(_User_.species);   // "Human"
console.log(_User_.greet()); // User said hello!

const users = new _User_("Umar");
// console.log(users.species);   //  undefined
// console.log(users.greet()); // TypeError: user.greet is not a function

// Practice:

//     Add static method compareAges(user1, user2) to User.

//     Use it to compare two users.
class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static compareAges(u1, u2) {
    return u1.age - u2.age;
  }
}

const u1 = new user("Ali", 22);
const u2 = new user("Umar", 25);

console.log(user.compareAges(u1, u2)); // -3 (Ali younger than Umar)

    // Practice Task (Mini Project)

    // Build a User System:

    //     User class with name, email, password.

    //     Admin class extending User.

    //     Methods: login(), logout().

    //     Static method: count total users created.

    //     Test multiple users and admins.
class User {
  static userCount = 0;

  #password;

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
    User.userCount++;
  }

  login(pw) {
    return pw === this.#password? `${this.name} logged in!` : "Wrong password!";
  }

  logout() {
    return `${this.name} logged out!`;
  }

  static totalUsers() {
    return User.userCount;
  }
}

class Admin extends User {
  constructor(name, email, password, role) {
    super(name, email, password);
    this.role = role;
  }

  getInfo() {
    return `${this.name} (${this.role})`;
  }
}
const p1 = new User("Ali", "ali@gmail.com", "123");
const p2 = new User("Umar", "umar@gamil.com", "456");

const admin = new Admin("Admin", "admin@gmail.com", "root", "superadmin");

console.log(p1.login("123")); // Ali logged in!
console.log(p2.logout()); // Umar logged out!
console.log(admin.getInfo()); // Admin (superadmin)
console.log(User.totalUsers()); // 3
