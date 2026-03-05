 let button = document.getElementById("primebtn");
 let result = document.getElementById("result");


 button.addEventListener("click",()=>{

    let primes = "";

    for(let i = 1;i <= 50;i++){
        let isprime = true;

        if(i <= 1){
            isprime = false
        }else{
            for(let j = 2;j < i;j++){
                if(i % j === 0){
                    isprime = false;
                    break;
                }
            }
        }

        if (isprime){
            primes += i + ", ";
        }
    }

    result.innerHTML = primes;
 })