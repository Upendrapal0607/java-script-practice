// console.log("Outside function",this);

// function GlobleFunction() {
//     console.log("Inside function",this);
// }
// GlobleFunction()


// function BindWithObj(){
// console.log("Bind with object function",this);
// }

// const MyObj ={
//     name:"Upendra Pal"
// }

// BindWithObj.call(MyObj)


const FunctionInsideMyObj = {
    name:"Arrow Function inside function accessible this keyword",
    Call:function(){
        const objInArrowFunction = this;
        (() => {
            console.log(`${objInArrowFunction.name}`);
        })();
    } 
};


FunctionInsideMyObj.Call();
// const FunctionInsideMyObj = {
//     name:"Arrow Function inside function accessible this keyword",
//     Call:function(){
//         const objInArrowFunction = this
//         (() => {
//             console.log(`${objInArrowFunction.name}`);
//         })();
//     } 
// };
// FunctionInsideMyObj.Call();

// FunctionInsideMyObj.Call()

const MyObject2= {
    name: "Arrow Function inside function accessible this keyword",
    Call(){
       const Arrow= () => console.log(`${this.name}`);
        Arrow()
    }
};

MyObject2.Call(); // This will correctly log the name property

// const Calculator ={
//     value1:+prompt("value1=",0),
//     value2:+prompt("value1=",0),
//     read(){
//         console.log(`${this.value1} ${this.value2}`);
//     },
//     add(){
//         return this.value1+this.value2;
//     },
//     mul(){
//         return this.value1*this.value2;
//     },
//     divide(){
//         return this.value1/this.value2;
//     }
// }
// Calculator.read();
// console.log(Calculator.add());
// console.log(Calculator.mul());
// console.log(Calculator.divide());

// let length = 5
// const MyFun = function(){
//     console.log(this.length);
// }

// const MyObj2 ={
//     length:4,
//     method(){
//         console.log(arguments);
//         arguments[0]()
//     }
// }

// MyObj2.method(MyFun,5)
const calc={
    total : 0,
    add(num){
        this.total += num;
        return this;
    },
    multiply(num){
        this.total *= num;
        return this;
    },
    substract(num){
        this.total -= num;
        return this;
    }
}

// const result = calc.add(20).multiply(10).substract(20).add(10)
// console.log(result,result.total);