let button = document.getElementById("evenbtn");
let result = document.getElementById("result");

button.addEventListener("click",()=>{
    let output = "";


    for(let i = 20;i >= 1;i--){
        if(i % 2 === 0){
            output += i +", ";
        }
    }
    result.innerHTML = output;
})