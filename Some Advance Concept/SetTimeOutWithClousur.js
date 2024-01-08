// Topic.1 - Closure
// closure is a mechanism in which javascript maintains some variables in closure scope if the particular vaqriable goes out of scope
// javascript 2 pass engine lexical scope it matter more on where your function are declear

function Outer(){
    let a=10
   
   return function Inner(b){
        return ()=>a+b
}
}
let fn= Outer()

console.log(fn(10)());






let arr= [1,2,3,4];

for (var i = 0; i < arr.length; i++) {
   setTimeout(() => {
    console.log(i,arr[i]);
   }, i*1000); 
}
// this code will give you
// output:
//  4 undefined
//  4 undefined
//  4 undefined
//  4 undefined
// because of the globle scope

for (let i = 0; i < arr.length; i++) {
   setTimeout(() => {
    console.log(i,arr[i]);
   }, i*1000); 
}
// this code will give you
// output:
//  0 1
//  1 2
//  2 3
//  3 4
// because of the local scope or

// we can acheive it also using other method or way look bello code

function Display1(i) {
    setTimeout(() => {
  console.log(i,arr[i]);
 }, i*1000); 
}

for (var i = 0; i < arr.length; i++) {
  Display1(i)
}

function Display2(i) {
      setTimeout(() => {
    console.log(i,this[i]);
   }, i*1000); 
}

for (var i = 0; i < arr.length; i++) {
    Display2.call(arr,i)
}

// few Date relatede concept according to need we can use it

let date= new Date()
console.log("date",date.getDate());
console.log("Day",date.getDay());
console.log('year',date.getFullYear());
console.log('hours',date.getHours());
console.log('minuts',date.getMinutes());
console.log('timeZone',date.getTimezoneOffset());
console.log('ut date',date.getUTCDate());
console.log('ut second',date.getUTCSeconds());
console.log('month',date.getMonth());

