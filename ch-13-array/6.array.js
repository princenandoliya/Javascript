// join method
//The join() method is used to combine elements of an array (or list) into a single string, with a specified separator placed between each element.


let bike = ["gt 650","kawasaki zx10r","kawasakiz900","bmw s1000 rr"]
console.log("bike length",bike)
console.log("join method = ",bike.join(" "))


//flat method
//The flat() method is used to flatten nested arrays into a single array.

let number = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(("flat method",number.flat()))


let num = [
    [1,2,3,[4,5,4,[9,8,9,[,4,5,6[2,23,5]]]]]
    [1,2,3,[5,6,7,[8,9,6,[5,8,9,5]]]]
]
console.log("num",num.flat(Infinity))


//slice
//The slice() method is used to extract a portion of an array and return it as a new array.

let car = ["bmw m5","audi","i20","thar","fortuner","swift"]
console.log(" car name",car)
console.log(car.slice(0,4))
