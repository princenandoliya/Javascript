document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();


    let number = Number(document.getElementById("number").value);

    let result = document.getElementById("result");


    if (number > 0) {
        result.textContent = `Positive number`
    }
    else if (number < 0) {
        result.textContent = `Negative number`
    } else {
        result.textContent = `Zero`

    }

})
    
