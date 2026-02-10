document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()

    let number = document.getElementById("number").value;
    let result = document.getElementById("result");

    result.textContent = "";

    if(number === 0){
        textContent = "please Enter A Number"
        
    }
    if(number < 0){
        textContent = "Please Enter A Positive Number"
    }

    let gill = 1;

    for(let i = 1;i <= number;i++){
        gill = gill * i;
    }

    result.textContent = "Factorial of "+ number + " is " + gill;
})