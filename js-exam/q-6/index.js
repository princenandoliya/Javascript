document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let num = Number(document.getElementById("num").value)
    let result = document.getElementById("result")

    let prime = "";

    for(let i = 2;i<= num;i++){
        let count = 0;

        for(let j = 1;j <= i;j++){
            if(i % j == 0)
                count++;
        }

         if(count == 2){
        prime += i + ", "
    }
    }

   

     result.innerHTML = prime;
})