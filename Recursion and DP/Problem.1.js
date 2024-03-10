// Fibbonachi problem 

// 1.Recursive Method 
const Fib=n=>{
    if(n==1||n==2) return 1
    return Fib(n-1)+Fib(n-2)
}

// console.log(Fib(3));
// console.log(Fib(5));
// console.log(Fib(7));
// console.log(Fib(8));
// console.log(Fib(50)); it is take more time 
// if you try to solve n=> 50 then it will take more time may code can stuck
// we can make it faster using DP extands for dynamic programing
// TC= O(log2**n)

// DP method 
const DPFib=(n,memo={})=>{
    if(n in memo) return memo[n]
    if(n==0||n==1) return n;
    memo[n]= DPFib(n-1,memo)+DPFib(n-2,memo);
    return memo[n]
}
// console.log(DPFib(10));
// console.log(DPFib(50));
// console.log(DPFib(60));
// console.log(DPFib(100));
// all code will exicute in less time complecity 

// TC= O(n)
// SC= O(n) 

