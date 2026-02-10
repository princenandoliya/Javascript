document.getElementById('form').addEventListener("submit",(e)=>{
    e.preventDefault()

    let result = document.getElementById("result");

    let a = Number(document.getElementById("Number1").value)
    let b = Number(document.getElementById("Number2").value)
    let c = Number(document.getElementById("Number3").value)

    if(a > b && a > c){
        result.textContent = a + " is The Largest Number";
    }else if(b > a && b > c){
        result.textContent = b + " is The Largets Number"
    }else{
        result.textContent = c + " is The Largets Number"
    }


})