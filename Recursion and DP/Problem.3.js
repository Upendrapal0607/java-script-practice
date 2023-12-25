// CanSum Problem
// you have given an intiger of array and a target function return true if target sum is exist in the arr 
// else return false if it is not exist 

// let's understand with the help of an example 
// E.1 - arr= [3,5,2,7] targetSum= 7 here 2 posible value 1.[5,2] and 2. [7]
// output = true
// E.2 - arr= [3,5,2,7] targetSum= 20 here is no posible sum whitch is exactly equal to targetSum then return false

//see code for this

// 1. Recursive method
function CanSum(arr,targetSum){
if(targetSum==0) return true
if(targetSum<0) return false
for(let el of arr){
    if(CanSum(arr,targetSum-el)){
        return true
    }
}
return false
}

// console.log(CanSum([5,2,3,7,6],7)); //true
// console.log(CanSum([8,3,2],10)); //true
// console.log(CanSum([3,6],7));  //false
// console.log(CanSum([3,6],14)); //false

// let's see DP method for this 

function DPCanSum(arr,targetSum,memo={}){
if(targetSum in memo) return true
if(targetSum==0)return true 
if(targetSum<0)return false 
for(let el of arr){
    if(DPCanSum(arr,targetSum-el)){
memo[targetSum]= true
return true
    }
}
memo[targetSum]=false
return false
}

// console.log(DPCanSum([5,2,3,7,6],7)); //true
// console.log(DPCanSum([8,3,2],10)); //true
// console.log(DPCanSum([3,6],7));  //false
// console.log(DPCanSum([3,6],14)); //false