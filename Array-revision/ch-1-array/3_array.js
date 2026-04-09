let car = [
    "Thar",
    "120",
    "fortuner",
    "audi",
    "bmw",
    "swift"
]
console.log("car",car)

car.push("Verna")
console.log("after push",car)

car.pop()
console.log("after pop",car)


car.unshift("verna")
console.log("after unshift",car)


car.shift()
console.log("after shift",car)


let bike = ["Kawasaki zx10r","Ducati","gt 650","R15","jawa 42"]
console.log("bike",bike)


bike.splice(3,4)
console.log("after splice",bike)

bike.splice(3,3, "kawasaki Z900")
console.log("after replce",bike)


bike.splice(3,0, "jawa 42")
console.log("after add",bike)