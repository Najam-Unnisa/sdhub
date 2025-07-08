
let timer = 5

id= setInterval(() => {
    timer--
    if(timer<=0){
        timer=0
    clearInterval(id)
    }
        document.querySelector("#Timer").textContent=timer
        console.log("this ia a timer")
}, 1000);


  