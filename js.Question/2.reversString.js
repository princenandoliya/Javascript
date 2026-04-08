let car = "bmw m5"

let cars = car.split("")

let reversed = cars.reverse()

let convert = reversed.join("")
console.log("car",convert)

// using loop


let bike = "bmw s1000rr"

let reversedbike = ""

for(let i=bike.length-1;i>=0;i--){
    reversedbike += bike[i]
}
console.log("bike",reversedbike)