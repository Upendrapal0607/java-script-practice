const root = document.querySelector(".root");
const close = document.querySelector(".close");
const open = document.querySelector(".open");
const model = document.getElementById("model");


const OpenBox = (e) => {
  // console.log(e);
  model.classList.add("sow-box");
  e.stopPropagation();
};
open.addEventListener("click", OpenBox);

close.addEventListener("click", CloseBox);
function CloseBox(e) {
  // console.log(e);
  model.classList.remove("sow-box");
  e.stopPropagation();
}
// document.querySelector("body").addEventListener("click",()=>{
//     model.classList.remove("sow-box")
// })

// you can use mouseover and mouseout
// close.addEventListener("mouseover",()=>{
//     console.log("helo");
// })
// close.addEventListener("mouseout",()=>{
//     console.log("helo");
// })

function FetchFun(value) {
  console.log(value);
}

// Throttle method

let id2;
const Throttle = () => {
  if (!id2) {
    id2 = setTimeout(() => {
      FetchFun("Throttle handle ofter 2 sec");
      id2 = null;
    }, 2000);
  }
};

// Debounce method

let id;
const Debounce = () => {
  if (id) {
    clearInterval(id);
  }
  id = setTimeout(() => {
    FetchFun("Debounce handle ofter 2 sec");
  }, 2000);
};

// let checkId;
// const throttleAgain = () =>{
// if(!checkId){
//   checkId = setTimeout(()=>{
//     // function call
//     // checkId = null  again set check id to null
//   },1000)
// }
// }

// let checkIdDebounce;
// const NewDebounce = ()=>{
//   if (checkIdDebounce) {
//     clearInterval(checkIdDebounce)
//   }
//    checkIdDebounce= setTimeout(() => {
//     // function call here
//   }, 1000);
// }
// {postId,id,name,email,body}
function CreateHtmlData({postId,id,name,email,body}){
return `
<div class = "card" onClick="NavigateToSinglePage(${id})">
<h1>${name}</h1>
<h4>${email}</h4>
<p>${body}</p>
</div>
`
}
const SowData = data=>{
let root=document.querySelector(".root")
root.innerHTML=null
let htmlData = data.map(el=>CreateHtmlData({...el})).join("")
root.innerHTML=htmlData
}
// SowData([`<h1>hello india</h1>`,`<h1>hello india</h1>`,`<h1>hello india</h1>`])

   window.addEventListener("load", async()=>{
      try {
    await fetch("https://jsonplaceholder.typicode.com/comments").then(res=>res.json())
    .then(useData=>SowData(useData)).catch(error=>console.log({error}))
   
     } catch (error) {
    console.log({error});
    }
   })

   async function NavigateToSinglePage(id) {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/comments?id=${id}`).then(res=>res.json())
      .then(useData=>SowData(useData)).catch(error=>console.log({error}))
     
       } catch (error) {
      console.log({error});
      }
   }