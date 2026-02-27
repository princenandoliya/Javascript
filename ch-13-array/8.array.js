//indexOf method
// indexOf() returns the index (position) of a specified element in the array.
// If the element is not found, it returns -1.

let car = ["audi","thar","fortuner","bmw m5","swfit"]

console.log("find the indexof bmw m5 :-",car.indexOf("bmw m5"))

//includes method
// includes() checks if a specified element exists in the array.
// It returns true if found, otherwise it returns false.

let car1 = ["audi","thar","fortuner","bmw m5","swfit"]

console.log(car1.includes("audi"))

//sort method
// sort() arranges the elements of an array in alphabetical or ascending order.
// It modifies the original array.

let number = [1,4,2,3,7,6,5,9,8,]
console.log(number.sort())

//ascending order

console.log("sorting number array in ascending order :-",number.sort((a,b)=>a - b))

//descending order

console.log("sorting number array in descending order :-",number.sort((a,b)=> b- a))