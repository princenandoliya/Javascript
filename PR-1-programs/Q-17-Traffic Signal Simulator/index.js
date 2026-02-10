document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()

    let signal = document.getElementById("signal").value
    let result = document.getElementById("result")

    let red =document.getElementById("red")
    let yellow = document.getElementById("yellow")
    let green = document.getElementById("green")

    red.classList.remove("active")
    yellow.classList.remove("active")
    green.classList.remove("active")

    if(signal === "red"){
        red.classList.remove("active")
        result.textContent = "🛑 Stop"
    }else if(signal === "yellow"){
         yellow.classList.remove("active")
        result.textContent = "⚠️ Ready"
    }else if(signal === "green"){
        green.classList.remove("active")
        result.textContent = "✅ Go"
    }
})
