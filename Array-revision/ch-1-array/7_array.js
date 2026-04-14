let car = [
    "Audi",
    "bmw",
    "i20",
    "verna",
    "swift",
    "volvo"
]
console.log("car",car)
console.log("index of verna",car.indexOf("verna"))

console.log("includes method",car.includes("thar"))


let alphabet = ["a","b","c","e","d"]

console.log("alphabet",alphabet)
console.log("alphabet after sort method",alphabet.sort())





let number = [1,2,3,4,5,6,7,8,9,10]
console.log("descending order",number.sort((a,b)=>{
    return b-a;
}))