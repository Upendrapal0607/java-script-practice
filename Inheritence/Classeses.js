class Person1 {
  constructor(user_name, profession) {
    this.user_name = user_name;
    this.profession = profession;
  }

  sayHello() {
    return `hello ${this.user_name}`;
  }
  greet() {
    return `hello ${this.user_name} thank you for join ${this.profession}`;
  }
}
class Person2 extends Person1 {
  constructor(category,city,...arg) {
      super(...arg);
    this.category=category;
    this.city=city
  }

  sayHello() {
    return `hello ${this.user_name}`;
  }
  greet() {
    return `hello ${this.user_name} thank you for join ${this.profession}`;
  }
}

class Person3 extends Person1 {
    constructor(...arg) {
        super(...arg);
    }
}
class Person4 extends Person2 {
    constructor(...arg) {
        super(...arg);
    
    }
}

const user1 = new Person1("Upendra Pal", "full stack web development");
const user2 = new Person2("SDE-1","Lucknow","Sandeep", "MERN-2");
const user3 = new Person3("SDE-2","Lucknow","Sandeep", "MERN-4");
const user4 = new Person4("SDE-3","Lucknow","Sandeep", "MERN-4");
console.log({user1, user2,user3,user4});
// user.greet();
