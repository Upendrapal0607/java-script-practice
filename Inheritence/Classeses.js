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
  constructor(category, city, ...arg) {
    super(...arg);
    this.category = category;
    this.city = city;
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

// const user1 = new Person1("Upendra Pal", "full stack web development");
// const user2 = new Person2("SDE-1","Lucknow","Sandeep", "MERN-2");
// const user3 = new Person3("SDE-2","Lucknow","Sandeep", "MERN-4");
// const user4 = new Person4("SDE-3","Lucknow","Sandeep", "MERN-4");
// console.log({user1, user2,user3,user4});
// user.greet();

class Car {
  constructor(name, model, brand, color, speed) {
    this.name = name;
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.speed = speed;
  }
  Speed() {
    console.log(`Name ${this.name} and speed is ${this.speed}`);
  }
}

class Car2 extends Car {
  constructor(version = 2.4, ...arg) {
    super(...arg);
    this.version = version;
  }
  Version() {
    console.log(
      `New version ${this.version} Name ${this.name} and speed is ${this.speed}`
    );
  }
}
class Car3 extends Car2 {
  constructor(...arg) {
    super(...arg);
  }
}

let car1 = new Car("bmw", "2023", "BMW-334", "black", "450km/h");
let car2 = new Car2("1.34", "bmw-2", "2022", "BMW-335", "black", "350km/h");
let car3 = new Car3("1.34", "bmw-2", "2022", "BMW-335", "black", "350km/h");
car1.Speed();
car2.Speed();
car2.Version();
car3.Speed();
car3.Version();
console.log({ car1, car2, car3 });
