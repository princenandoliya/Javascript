document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let cars = document.getElementById("cars").value;

    let result = document.getElementById("result");

    if(cars === "Bmw"){
        result.innerHTML = `<h1 id=>Luxury car</h1>`
    }else if(cars === "Swift"){
        result.innerHTML = `<h1> family car</h1>`
    }else if( cars === "Thar"){
        result.innerHTML = "<h1>off-road car</h1>"
    }else if(cars === "Fortuner"){
        result.innerHTML = "<h1>Suv car</h1>"
    }else if( cars === "Audi"){
        result.innerHTML = `<h1>Premium Luxury car</h1>`
    }else{
        result.innerHTML = `<h1>Unknown car</h1>`
    }



})