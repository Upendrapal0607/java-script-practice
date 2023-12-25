const root = document.querySelector(".root")
const close = document.querySelector(".close")
const open = document.querySelector(".open")
const model= document.getElementById("model")

const OpenBox=(e)=>{
    console.log(e);
    model.classList.add("sow-box")
    e.stopPropagation();
}
open.addEventListener("click",OpenBox)

close.addEventListener("click",CloseBox)
function CloseBox(e){
    console.log(e);
    model.classList.remove("sow-box")
    e.stopPropagation();
}
document.querySelector("body").addEventListener("click",()=>{
    model.classList.remove("sow-box")
})


// you can use mouseover and mouseout 
// close.addEventListener("mouseover",()=>{
//     console.log("helo");
// })
// close.addEventListener("mouseout",()=>{
//     console.log("helo");
// })