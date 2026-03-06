document.getElementById("form").addEventListener("submit",(e)=>{
    
    e.preventDefault();
    let numbers = [
        Number(document.getElementById("num1").value),
        Number(document.getElementById("num2").value),
        Number(document.getElementById("num3").value),
        Number(document.getElementById("num4").value),
        Number(document.getElementById("num5").value)
    ]

    let largest = numbers[0];


    for(i = 0;i < numbers.length;i++){
        if(numbers[i] > largest){
            largest = numbers[i]
        }
    }

    document.getElementById("result").innerHTML = 
    "Entered Number :- <br>" + numbers + "<br><br>largest number :-" + largest
})