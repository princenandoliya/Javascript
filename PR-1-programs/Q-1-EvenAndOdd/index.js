document.getElementById("form").addEventListener("submit", (e) => {

    e.preventDefault()

    document.getElementById("result");

    let num = Number(document.getElementById("submit").value)


    if(num %2 === 0){
        result.textContent = "Even Number";
    }else{
        result.textContent = "odd Number"
    }

})