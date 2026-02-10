document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()

    let weight = Number(document.getElementById("weight").value)
    let height = Number(document.getElementById("height").value)/100
    let result = document.getElementById("result")

    let bmi = weight / (height * height)
    bmi = bmi.toFixed(2);

    if(bmi < 18.5){
        result.innerText = `BMI: ${bmi} (Underweight)`;
    }else if( bmi < 25){
        result.innerText = `BMI ${bmi} (Normal)`
    }else if(bmi < 30){
        result.innerText = `BMI ${bmi} (Overweight)`
    }else{
        result.innerText =  `BMI ${bmi} (Obese)`
    }
})