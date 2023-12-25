// Linear Search  is use for searxhing an element in the array where it will take onabort(n) space complecity
let arr= [5,4,3,6,8];k=8
function LinearSearch(arr,k){

    for (let i = 0; i < arr.length; i++) {
      if(arr[i]==k) return arr[i]
       
    }
    return min
}
console.log(LinearSearch(arr,k));



const newLocal = 0;
function LinearSearchLessthanK(arr,k){
    let min=newLocal
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>min&&arr[i]<k){
            min= arr[i]
        }
       
    }
    return min
}
console.log(LinearSearchLessthanK(arr,k));


// Binary Search
// Binary Seacrh is a optemized way to searcj an element in sorted arr 
// where we aredivide the arr into two Part 

let SortedArr=[3,5,6,8,9,20];
let target=20;
function BinarySearch(arr,target){
let l= 0;r=arr.length-1;
while(l<=r){
    let mid= Math.floor(l+(r-l)/2)
    if(arr[mid]==target) return mid
    else if(arr[mid]>target) r= mid-1
    else l=mid+1
}
return -1
}

console.log(BinarySearch(SortedArr,target));
