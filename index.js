
//Q.1 Clouser in ES6
const Outer=a=>b=>()=>console.log(a+b);
// let outer= Outer(10)(20)
// outer()



//Q.2 Clouser in Simple function

function FirstName(first_name){
    let second="pal"
    return function(){
        return function (){

            console.log(`${first_name} ${second}`)
        }
    }
}

// let full_Name= FirstName("Upendra")()
// full_Name()



//Q.3 Imidiate function called

// (function (a){
// let b= "pal"
// return function(){
//     console.log(`${a} ${b}`);
// }
// })("Upendra")()



// Q.4 Guess output 

//4.a
//  const Main=()=>{
//     var a=10;
//     let foo=()=>console.log(a);
//     let bar=()=>{
// var a= 20
// foo()
//     }
//     bar()
// }
// Main()
// ans: output 10




// 4.b
//  const Counter=()=>{
//     let count=10;
//     let CounterVlaue=()=>{
// count++;
// console.log(count);
// };

// return CounterVlaue
// }

// let outPut = Counter();
// outPut();
// outPut();
// outPut();
// output :
//       11
//       12
//       13

// 4.c
//  const Counter2=()=>{
//     let count=10;
//     let CounterVlaue2=()=>{
// count++;
// console.log(count);
// };

// CounterVlaue2()
// }

//  Counter2();
//  Counter2();
//  Counter2();
// output : 
//      11
//      11
//      11


// ans: output 10

