document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault()

    let unit = document.getElementById("bills").value;

    let result = document.getElementById("result");

    if(unit <= 100){
        result.innerText = 100 * 10;
    }else if(unit <= 200){
        result.innerText = 100 * 10 + (unit - 100) * 20;
    }else if (unit >= 300){
        result.innerText = 100 * 10 + 100 * 10 + (unit - 200)*30;
    }

      


})