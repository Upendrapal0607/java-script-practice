// Problem-1. you have to given an intiger of arr you have to find the 
// two index which position element some is exactaly K if not exist print -1

function SumOfK(arr,n,K){
    let Obj={};
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
SumOfK(arr,arr.length,250);

function ArrayChallenge(strArr) {
    const events = strArr.map(event => {
      const match = event.match(/(\d+):(\d+)([APMapm]+)-(\d+):(\d+)([APMapm]+)/);
    //   console.log({match,splitValue:match.slice(1)});
      if (!match) {
        throw new Error(`Invalid time format in event: ${event}`);
      }
//   console.log({splitvalue:match.split(1)});
      const [startHour, startMinute, startPeriod, endHour, endMinute, endPeriod] = match.slice(1);
      const convertToMinutes = (hour, minute, period) => {
        const adjustedHour = period.toUpperCase() === "PM" && hour !== "12" ? parseInt(hour, 10) + 12 : parseInt(hour, 10);
        return adjustedHour * 60 + parseInt(minute, 10);
      };
      return { start: convertToMinutes(startHour, startMinute, startPeriod), end: convertToMinutes(endHour, endMinute, endPeriod) };
    });
//   console.log({events});
    events.sort((a, b) => a.start - b.start);
  
    let longestFreeTime = 0;
    for (let i = 0; i < events.length - 1; i++) {
      const freeTime = events[i + 1].start - events[i].end;
      longestFreeTime = Math.max(longestFreeTime, freeTime);
    }
  
    const hours = Math.floor(longestFreeTime / 60);
    const minutes = longestFreeTime % 60;
  
    const output = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return output;
  }
  
  // Example usage
  const input = ["12:15PM-02:00PM","09:00AM-12:11PM","02:02PM-04:00PM"];
  console.log(ArrayChallenge(input)); // Output: 01:30
  
