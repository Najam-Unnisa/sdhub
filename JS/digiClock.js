


setInterval(()=>{
const date = new Date()
const hrs= date.getHours()
const mins = date.getMinutes()
const secs = date.getSeconds()
let time = `${hrs} ${mins} ${secs}`
document.querySelector("#time").textContent=time
},1000)




