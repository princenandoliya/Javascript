 document.getElementById("form").addEventListener("submit",(e)=>{
    
    e.preventDefault();
    let num = Number(document.getElementById("num").value)

    let result = "";

    for(let i = 2;i <= num;i++){

        let isprime = true;
        for(let j = 2;j < i;j++){
            
            if(i % j === 0){
                isprime = false
                break
            }
        }
        if(isprime){
            result += i + " ";
        }

       
    }

    document.getElementById("result").innerHTML =
    "prime Numbers :-<br>" + result;
 })