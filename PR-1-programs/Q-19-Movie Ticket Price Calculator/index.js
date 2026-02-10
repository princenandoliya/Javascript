document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()

    let age = Number(document.getElementById("age").value)
    let result = document.getElementById("result")

    if(age < 0){
        result.innerText = `❌ Invalid age`
    }else if(age < 12){

        result.innerText  = `Ticket Price: 100 (child)`
    }else if(age < 60){
        result.innerText = `Ticket Price: 200 (Adult)`
    }else {
        result.innerText = `Ticket Price: 150 (Senior Citizen)`
    }

})