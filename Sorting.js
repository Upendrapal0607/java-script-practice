// 1. Build in method
let arr = [2, 6, 3, 90, 74, 3];
let strArr = ["upendra", "rahul", "joy", "jacks", "levies"];
// a. for Assending
const AssendingSort = (arr) => arr.sort((a, b) => a - b);
//  console.log(AssendingSort(arr))
// b. for Desending
const DesendingSort = (arr) => arr.sort((a, b) => b - a);
//  console.log(DesendingSort(arr))

// In case You want to sort any String

// a. for Assending
const StrInAssendingSort = (arr) => arr.sort();
//  console.log(StrInAssendingSort(strArr))
// b. for Desending
const StrInDesendingSort = (arr) => arr.sort().reverse();
//  console.log(StrInDesendingSort(strArr))

// 2. Merge Sort Algorithm

function MergeSort(arr, l = 0, r = arr.length - 1) {
  if (l >= r) {
    return;
  }
  let mid = Math.floor(l + (r - l) / 2);
  MergeSort(arr, l, mid);
  MergeSort(arr, mid + 1, r);
  merge(arr, l, mid, r);
}

function merge(arr, l, mid, r) {
  let mergedArr = [];
  let inx1 = l;
  let inx2 = mid + 1;
  let x = 0;
  while (inx1 <= mid && inx2 <= r) {
    if (arr[inx1] <= arr[inx2]) {
      mergedArr[x++] = arr[inx1++];
    } else {
      mergedArr[x++] = arr[inx2++];
    }
  }
  while (inx1 <= mid) {
    mergedArr[x++] = arr[inx1++];
  }
  while (inx2 <= r) {
    mergedArr[x++] = arr[inx2++];
  }

  for (let i = 0, j = l; i < mergedArr.length; i++, j++) {
    arr[j] = mergedArr[i];
  }
}
// let SortArr = [];

// for(let j=90;j>=0;j--){
//     SortArr.push(j)
// }
// console.log(SortArr);
// MergeSort(SortArr);
// console.log(SortArr);

// Quick Sort Algorithm

// function QuickSort(arr, l = 0, r = arr.length - 1) {
//   if (l < r) {
//     let pivotInx = Partition(arr, l, r);
//     QuickSort(arr, l, pivotInx - 1);
//     QuickSort(arr, pivotInx + 1, r);
//   }
// }

// function Partition(arr, l, r) {
//   let pivot = arr[r];
//   let i = l;
//   for (let j = l; j < r; j++) {
//     if (arr[j] < pivot) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       i++;
//     }
//   }

//   let temp = arr[i];
//   arr[i] = pivot;
//   arr[r] = temp;
//   return i;
// }

// let arr2 = [2, 56, 7, 3, 5, 6, 2, 1];
// QuickSort(arr2);
// console.log(arr2);

// Bubble sort

function BubbleSort(arr) {
  //a. using 2 for loop
  // for(let i=0;i<arr.length-1;i++){
  //     let isSwap=true
  //     console.log(i);
  //     for(let j=0;j<arr.length-1-i;j++){
  //         if(arr[j]>arr[j+1]){
  //             [arr[j],arr[j+1]]= [arr[j+1],arr[j]]
  //             isSwap=false
  //         }
  //     }
  //     if(isSwap) return arr
  // }
  // b. Using do while loop
  //   let isSwap;
  //   do {
  //     isSwap = false;
  //     for (let i = 0; i < arr.length - 1; i++) {
  //       if (arr[i] > arr[i + 1]) {
  //         [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
  //         isSwap = true;
  //       }
  //     }
  //   } while (isSwap);
}
// let BubbleArr = [7,6,5,4,3,2,1];
// BubbleSort(BubbleArr);
// console.log(BubbleArr);

function SelectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
}

// let SelectionArr = [7, 6, 5, 4, 3, 2, 1];
// SelectionSort(SelectionArr);
// console.log(SelectionArr);

function Partition (){
  
}

const QuickSort =(arr,low,heigh)=>{
  if(low<heigh){
    const pivot = Partition(arr,low,heigh);
    QuickSort(arr,low,pivot-1);
    QuickSort(arr,pivot+1,heigh);
  }

}

  let arr2 = [2, 6, 3, 90, 74, 3];
  QuickSort(arr2,0,arr2.length-1);
  console.log({arr2});



  var merge = function(nums1, m, nums2, n) {
    let ans = [];
    let i = 0;
    let j = 0;
    let k =0;
    while(i<m&&j<n){
        if(nums1[i]<=nums2[j]){
            ans[k++] = nums1[i++]
        }
        else{
            ans[k++] = nums2[j++]
        }
    }
    while(i<m){
         ans[k++] = nums1[i++]
    }
    while(j<n){
 ans[k++] = nums2[j++]
    }

    return ans;
};


console.log("answer -->",merge([1,2,3,0,0,0], 3, [2,5,6],3));