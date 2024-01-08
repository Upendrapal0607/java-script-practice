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

function FetchFun() {
  console.log("fetchData");
}

// Throttle method

let id2;
const Throttle = () => {
  if (!id2) {
    id2 = setTimeout(() => {
      FetchFun();
      id2 = null;
    }, 1000);
  }
};

// Debounce method

let id;
const Debounce = () => {
  if (id) {
    clearInterval(id);
  }
  return (id = setTimeout(() => {
    FetchFun();
  }, 1000));
};
