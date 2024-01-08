function Person(
  name = "Upendra pal",
  age = 24,
  skill = "full stack web developer",
  city = "Lucknow"
) {
  this.name = name;
  this.age = age;
  this.skill = skill;
  this.city = city;

  this.Call = function () {
    console.log(`hello ${this.name}`);
  };
  this.greed = () => console.log(`hello student wellcome from ${this.name}`);
}

function Person2(name,age,skill,city,dressCode=23){
    // this is use for extend the properties of Person object
Person.call(this,name,age,skill,city)
  // using call method 
Person.apply(this,[name,age,skill,city]) 
// using apply method same as call but it will take argument as array formate
Person.bind(this,name,age,skill,city)()
 // using bind method same as call but it will return a function we if you want to use it then you must have to invoke the function
// Person.bind(this,[name,age,skill,city])()
 //this is incorrect
this.dressCode = dressCode
this.Reply = function(){
    console.log(`hello ${this.name} your dress code is ${this.dressCode}`);
} 
}
let p1 = new Person();
let p2 = new Person2("Sudhir kumar",25,"MERN developer","Varanasi",53);
// p1.greed(); //hello student wellcome from Upendra pal
// // p1.Reply(); it will sow you an error p1.Reply is not a function
// p2.greed();  //hello student wellcome from Sudhir kumar
// p2.Reply(); // hello Sudhir kumar your dress code is 53




function TestCode(text, group) {
    this.text = text;
    this.group = group;
    return this;
}

const myObject = {
    name:"Upendra pal"
}
let myObject2 = TestCode.call(myObject, "hello", "guys");
console.log(myObject2); //{ name: 'Upendra pal', text: 'hello', group: 'guys' }
let myObject3 = TestCode.apply(myObject, ["hii", "everyone"]);
console.log(myObject3); //{ name: 'Upendra pal', text: 'hii', group: 'everyone' }
let myObject4 = TestCode.bind(myObject, "hey", "freinds")(); //{ name: 'Upendra pal', text: 'hey', group: 'freinds' }
console.log(myObject4);

console.log("final-->",myObject2,myObject3,myObject4);
//final--> { name: 'Upendra pal', text: 'hey', group: 'freinds' }
//         { name: 'Upendra pal', text: 'hey', group: 'freinds' }
//         { name: 'Upendra pal', text: 'hey', group: 'freinds' }  
//  becoause all the tree Object reference is myObject they are refer same object not blue copy of it. 
