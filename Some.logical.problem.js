// Problem-1. you have to given an intiger of arr you have to find the 
// two index which position element some is exactaly K if not exist print -1

function SumOfK(arr,n,K){
    let Obj={};
    // Obj[1]="upendra"
    // console.log(2 in Obj);
    for(let i=0;i<n;i++){
        let compliment= K-arr[i];
        if(compliment in Obj) {
            console.log(`${Obj[compliment]} ${i}`);
            return
        }
        Obj[arr[i]]=i
    }
   
   console.log(-1)
   return
}
let arr= [4,2,7,6,9,30,40,1,23]
SumOfK(arr,arr.length,41);
