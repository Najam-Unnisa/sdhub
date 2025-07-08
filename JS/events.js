
let Btn = document.querySelector("#show").addEventListener("click", ()=>
{
   
   const input = document.querySelector("#pass")
    if(input.getAttribute("type")=="password"){
input.setAttribute("type","text")
document.querySelector("#show").textContent="hide"
document.querySelector("#show").style.backgroundColor="red"
const a =document.getElementById("h1")

setTimeout(()=>{
   a.textContent="Button was clicked!!!"
    
},3000)
setInterval(()=>{
    console.log("hello")
},1000)
    }else{
        input.setAttribute("type","password")
        document.querySelector("#show").textContent="show"
    }
})


const dt = new Date('2000-07-15')

console.log(dt.getDay())