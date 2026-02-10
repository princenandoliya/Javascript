document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()

    let number = document.getElementById("number").value
    let result = document.getElementById("result")

    result.textContent = "";



    if(number === ""){
        result.textContent = "Please Enter A Number"
        return;
    }

    for(let i = 1;i <= 10;i++){
        result.innerHTML += `${number} × ${i} =${number * i};<br>`
    }
})