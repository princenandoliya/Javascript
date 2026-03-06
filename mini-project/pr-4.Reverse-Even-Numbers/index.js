document.getElementById("form").addEventListener("submit",(e)=>{
    
    e.preventDefault();
    let result = "";


    for(let i = 20;i >= 1;i--){
        if(i % 2 === 0){
            result += i +", ";
        }
    }
    document.getElementById("result").innerHTML = 
    "reverse even number :- <br>" + result
})