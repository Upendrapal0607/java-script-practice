// Problem - Grid travels way

// given a m,n grid matrix you have to find all the posible way that can be trevels on it

// 1 recursive method 

const RecursiveGridTrevels=(m,n)=>{
    if(m==1&&n==1) return 1;
    if(m==0||n==0) return 0;
    return RecursiveGridTrevels(m-1,n)+RecursiveGridTrevels(m,n-1)
}

console.log(RecursiveGridTrevels(3,3));  // TC=O(logm*n)
console.log(RecursiveGridTrevels(4,3)); // SC=O(m+n)
console.log(RecursiveGridTrevels(2,5));
// console.log(RecursiveGridTrevels(20,20)); it can be take more time or stop the excution fase

// let's understand DP method to memorise it can be solve big problem in divide it into small problem


const DPGridTrevels=(m,n,memo={})=>{
    let key= `${m},${n}`
    if(key in memo) return memo[key]
    if(n==1&&m==1) return 1
    if(n==0||m==0) return 0
    memo[key]= DPGridTrevels(m-1,n,memo)+DPGridTrevels(m,n-1,memo)
    return memo[key]
}
// console.log(DPGridTrevels(10,10)); // TC = O(m*n)
// console.log(DPGridTrevels(20,20)); // SC = O(m+n) + O(memo space) on an average it is O(m+n)
// console.log(DPGridTrevels(50,50));
// console.log(DPGridTrevels(25,25));

// this is very fast solution of grid trevels solve using dp it will take less time but space can be increase witch is basicaly memo object

