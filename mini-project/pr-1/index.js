let button = document.getElementById("btn")

button.addEventListener("click",function(){

    let evenCount = 0;
    let oddCount = 0;

    for(let i = 1;i <= 50;i++){
        if(i % 2 === 0){
            evenCount++;
        }else{
            oddCount++;
        }
    }

    document.getElementById("result").innerHTML =
    "Even Number: " + evenCount + "<br>" +
    "odd Number: " + oddCount
})