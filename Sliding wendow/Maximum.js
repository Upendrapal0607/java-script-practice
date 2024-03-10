const MaximumNumberOfK =(arr,k) =>{
let result = [];
let deque = [];
for (let i = 0; i < arr.length; i++) {
  if (deque.length>0&&deque[0]<=i-k) {
   deque.shift(); 
  }
  while (deque.length!==0&&arr[deque[deque.length-1]]<arr[i]) {
    deque.pop();
  }
  deque.push(i);
  if(i>=k-1){
    result.push(arr[deque[0]]);
  }
}
return result;
}
console.log(MaximumNumberOfK([3,-4,2,1,5,3,-2,-3,-4,7],3)); 
console.log(MaximumNumberOfK([1,2,3,4,5,6,7,8],3)); 

const SumOfK = (arr,k)=>{
    let result = [];
    let sum = 0 ;
for(let i=0; i<k; i++){
sum+=arr[i];
    }
    result.push(sum);
    for(let i=k; i<arr.length; i++){
        sum=sum+arr[i]-arr[i-k];
        result.push(sum);
    }
    return result;
}
console.log(SumOfK([3,-4,2,1,5,3,-2,-3,-4,7],3)); 

