document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let num = Number(document.getElementById("num").value)



    let evenCount = 0;
    let oddCount = 0;

    for(let i = 1;i <= num;i++){
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