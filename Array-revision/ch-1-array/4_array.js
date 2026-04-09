let number = ["1","2","3","4","5","6","7","8","9","10",]

for (let i = 0;i < number.length;i++){
    console.log(number[i])
}

for(let element of number){
    console.log(element)
}

number.forEach(number => {
    console.log(number * 10)
    
});


let car =  ["bmw","audi","i20","Fortuner","Thar"]

let cars = number.concat(car)

console.log(cars)

console.log(cars.toString())