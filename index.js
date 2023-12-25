
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

// const Main=()=>{
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