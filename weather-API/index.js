document.getElementById("form").addEventListener("submit",async (e)=>{
    e.preventDefault()

    const input = document.getElementById("inp").value;
    const temprature = document.getElementById("temperature")
    const city = document.getElementById("city")
    const img = document.getElementById("img")
    const notfound = document.getElementById("not-found")


    try{
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=741c8e2867412a6d048b623e3dbfc3c6&units=metric`)

        const data = await weather.json()

        const humidity = document.getElementById("humidity")
        const humidityName = document.getElementById("humidity-name")
        const humidityimg = document.getElementById("humidity-img")

        const speed = document.getElementById("speed")
        const speedName = document.getElementById("speed-name")
        const speedimg = document.getElementById("speed-img")


        if(data === "404"){
            notfound.textContent = "No City Found"
            temprature.textContent = ""
            city.textContent = ""
            img.style.display = "none"


            humidity.textContent = ""
            humidityName.textContent = ""


            speed.textContent = ""
            speedName.textContent = ""

            humidityimg.src = "";
            speedimg.src = ""
        }else{


            temprature.textContent = `${data.main.temp} °C`
            city.textContent = `${data.name}`
            img.src = "img/cloud.png"
            img.style.display = ""
            notfound.textContent = ""


            humidity.textContent = `${data.main.humidity}%`
            humidityName.textContent = "humidity"

            speed.textContent = `${data.wind.speed} km/h`;
            speedName.textContent = "wind spped"


            humidityimg.src = "img/humidity.jpg"
            speedimg.src = "img/wind.jpg"
        }
    }catch(error){
        console.log("error",error)

        notfound.textContent = "No City Found"
    }

})