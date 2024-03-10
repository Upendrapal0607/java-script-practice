// 50 Javascript questions every developer should know the behavior of Javascript

// 1.
// const arr = [1, 2, 3];
// arr[10] = 11;
// console.log(arr.length);  11

// 2.
// const func = () => "Hello";
// console.log(typeof func);  function

// 3.
//console.log("5" + 3); //53

// 4.
//console.log(2 * "3"); // 6

// 5.
//console.log(null == undefined); // true

// 6.
//console.log(typeof NaN); //number

// 7.
//let x = 1;
//const func = () => {x = 2; };
//func();
//console.log(x); //2

// 8.
//let y = 1;
//const func = () => {let y = 2; };
//func();
//console.log(x); //1

// 9.
// const obj = { a: 1 };
// delete obj.a;
// console.log(obj.a); //undifind

// 10.
// console.log("1" - - "1"); //2

// 11.
// console.log([null] + [undefined]);// ""

// 12.
// console.log([] + []);// ""

// 13.
// console.log([1,2,3] + [4,5,6]); //"1,2,34,5,6"

// 14.
// console.log([] + {}); //[Object Object]

// 15.
// console.log({} + []); //[Object Object]

// 16.
// console.log({} + {}); //[Object Object][Object Object]

// 17.
// console.log(!!"flase"); //true

// 18.
// console.log(!false); //true

// 19.
// console.log(true+true); 2

// 20.
// console.log(true+false);1

// 21.
// console.log(true-false);1

// 22.
// console.log(false-true);-1

// 23.
// console.log(false+false);0

// 24.
// console.log(!!undefined); //false

// 25.
// console.log("5" == 5); //true

// 26.
// console.log(typeof typeof 1); //string

// 27.
// console.log( typeof 1); //number

// 28.
// console.log(typeof Boolean); //funtion

// 29.
// console.log(typeof Number); //function

// 24.
// console.log(typeof number); //undefind

// 28.
// console.log( typeof null); //onject

// 29.
// console.log(typeof typeof null); //string

// 30.
// console.log(Array.isArray([])); // true

// 31.
// console.log(1 < 2 < 3); //true
// description :
// 1<2 = true;
// now true < 3 in this case true is coresponding to 1
// 1<3 it is also true
// in that way output should bwe true

// 32.
// console.log(3 > 2 > 1); //false
// description :
// 3>2 = true;
// now  in this case true is coresponding to 1
// 1>1 it is also false
// in that way output should bwe false

// 33.
// console.log(0 || "0" && {}); //{}
// description:
//    in case of 0 which is a falsy value and || operator try to find a truthy value
//    now "0" is a string which is not empty then it is a thruthy value now && operation try to
//    find falsy value if it is found any falsy value then give output is false but here after && operator
//    {} is given which is truethy the it is give last truethy value which is {} so output : {}

// 34.
// console.log(Boolean(+"" + +[] + !+[])); true

// 35.
//  console.log(Number(+{})); NaN
// console.log(+[]);//0

// 36.
//  let a = [1, 2, 3];
//  let b = a;
//  b.push(4);
//  console.log(a.length,b.length); //4 4
// 37.
//  let a = [1, 2, 3];
//  let b = a;
//   a.push(4);
//  console.log(a.length,b.length); //4 4

// 38.
// console.log([] == ![]); //true
// console.log([]===[]); //false

// 39.
// console.log(typeof null); //object

// 40.
// console.log(+ +[]); //0

// 41.
// console.log("string".slice(-2)); //ng
// console.log("string".slice(2)); //ring

// 42.
//  console.log(typeof (function(){}())); // undifind

// 43.
//  console.log(2 + "2" * "2"); //6

// 44.
//  console.log(([]+![]).length); //5
//  Description:
//  first [] is give output "" , ![] is five output is "false" because rule of coversion
// now ""+"false" = "false" which length = 5

// 45.
//  console.log((!+[]+[]+![]).length); //9
// same above rule apply here as well

// 46.
//  console.log(![]); false

// 47.
// console.log("0" === false);//false

// 48.
// console.log("0" == false); //true

// 49.

// {
//     let a = 20;
//     let b = 30;
//     console.log(a); //20
//     console.log(b); //30
// }
// console.log(a); // a is not difine error and exicution will be stop
// console.log(b);

// 50.
// {
//   var a = 20;
//   var b = 10;
//   console.log(a); //20
//   console.log(b); //10
// }
// console.log(a); //20
// console.log(b);



// practice question for you:
// a. guess the output:
//       let a = 20
//       console.log(a.toFixed(4));
// b. guess the output:
    //   console.log(2 * 3 + "2");
    //   console.log(2 + "3" * 2);

// console.log([] + {}); //[Object Object]


// let users = [

//     {
  
//         name: 'Arvind',
  
//         age: 21,
  
//         gender: 'MALE',
  
//         documents: ['Adhar', '12_Marksheet']
  
//     },
  
//     {
  
//         name: 'Sunil',
  
//         age: 15,
  
//         gender: 'MALE',
  
//         documents: ['Pancard', 'Passport']
  
//     },
  
//     {
  
//         name: 'Rahul',
  
//         age: 18,
  
//         gender: 'MALE',
  
//         documents: ['10_Marksheet']
  
//     },
  
//     {
  
//         name: 'Neha',
  
//         age: 21,
  
//         gender: 'FFMALE',
  
//         documents: ['Adhar', '1O_Marksheet', 'Pancard']
  
//     },
  
//     {
  
//         name: 'Tanu',
  
//         age: 21,
  
//         gender: 'FFMALE',
  
//         documents: []
  
//     }
  
//   ]
  let selectedDocuments = ['Adhar', '1O_Marksheet']

//   let filteredUsers = users.filter(user => {
//     for (let el of selectedDocuments) {
//       if (!user.documents.includes(el)) {
//         return user;
//       }
//     }
//   });

  console.log(selectedDocuments);