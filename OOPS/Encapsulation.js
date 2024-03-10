
// Encapsulation:
//  Encapsulation is the bundling of data and methods that 
// operate on the data into a single unit (class in classical OOP). 
// This prevents external code from directly accessing the data,
//  and it can only interact with it through the methods provided.

// Encapsulation example
// class Car {
//     constructor(make, model) {
//       this.make = make;
//       this.model = model;
//       this.speed = 0;
//     }
  
//     accelerate(value=0) {
//       this.speed += value;
//       console.log(`Accelerating... Current speed: ${this.speed} km/h`);
//     }
  
//     brake() {
//       if (this.speed > 0) {
//         this.speed = 0;
//         console.log(`Braking... Current speed: ${this.speed} km/h`);
//       } else {
//         console.log('The car is already stopped.');
//       }
//     }
//   }
  
//   const myCar = new Car('Toyota', 'Camry');
//   myCar.accelerate(10);
//   myCar.brake();

//   Abstraction: 
//   Abstraction is the concept of hiding the complex implementation details and 
//   showing only the necessary features of an object to the outside world. It allows developers 
//   to work with high-level models without worrying about the low-level implementation details.
  
// Example of Abstraction:
// Abstraction example
// class Shape {
//     constructor(type) {
//       this.type = type;
//     }
  
//     getArea() {
//       throw new Error('Abstract method getArea() must be implemented');
//     }
//   }
  
  // class Circle extends Shape {
  //   constructor(radius) {
  //     super('circle');
  //     this.radius = radius;
  //   }
  
  //   getArea() {
  //       console.log("pi->",Math.PI);
  //     return Math.PI * this.radius ** 2;
  //   }
  // }
  
  // const circle = new Circle(5);
  // console.log('Area of the circle:', circle.getArea());

  // Inheritance:
  //  Inheritance is the mechanism by which a new class inherits
  //  propertiesand behaviors from an existing class. It promotes code 
  //  reusability and allows developers to create a new class based on an existing class.

// Example of Inheritance:
  
//Example of Inheritance 
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// }

// const dog = new Dog('Buddy', 'Golden Retriever');
// const animal = new Animal('All Animals')
// console.log({ dog ,animal});
// dog.speak(); // Output: Buddy barks.


// Polymorphism:
//  Polymorphism allows objects of different classes to be treated as objects of a 
// common superclass. It allows methods to be called on objects without knowing the specific
//  type of the object. This promotes flexibility and extensibility in the code.


//Example of Polymorphism:

class Vehicle {
  constructor(name) {
    this.name = name;
  }
  Start (){
    console.log(`${this.name} is starting`);
  }
}

class Car extends Vehicle {
  constructor(name ,brand) {
    super(name);
    this.brand = brand;
  }
  Start () {

    console.log(`${this.name} is moving`);
  }
}
// class Bicycle extends Vehicle {
//   Start () {
//     console.log(`${this.name} is cycling`);
//   }
// }

const vehicle = new Vehicle("Vehicle");
// const bicycle = new Bicycle('BMW');
const car = new Car('Car',"brand");
console.log({car,vehicle});
car.Start();