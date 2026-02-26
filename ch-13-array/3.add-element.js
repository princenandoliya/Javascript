// adding element to an array in last

let car = ["bmw m5","Thar","fortuner","Audi","creta",]
console.log(car.length,car)

//now adding en element into an array


car.push("verna")
console.log(car.length,car)


// adding element array from the starting

car.unshift("skoda")
console.log(car.length,car)

// Removing Elements from an Array

car.pop();
console.log(car.length,car)

// Removing Elements from the start an Array
car.shift();
console.log(car.length,car)


///2

let bike = ["bmw s1000 rr","gt 650","kawasaki Zx10r","kawasaki z900"]
console.log(bike.length,bike)


//now adding en element into an array

bike.push("Ducati")
console.log(bike.length,bike)

// adding element array from the starting
bike.unshift("R15")
console.log(bike.length,bike)

// Removing Elements from an Array
bike.pop()
console.log(bike.length,bike)

// Removing Elements from the start an Array
bike.shift()
console.log(bike.length,bike)


//splice
//The splice() method is used to remove, add, or replace elements in an array.
//It modifies (changes) the original array.

console.log("bike elements and their length",bike.length,bike)


// Adding new items to the bike array from the second position
bike.splice(2,0, "r15","ktm")
console.log(bike.length,bike)


// Removing specific elements from the bike array
console.log("bike elements and their length",bike.length,bike)
bike.splice(2,3)
console.log(bike.length,bike)


// Replacing an element in the bike array at a specific index using splice()
console.log("bike elements and their length",bike.length,bike)
bike.splice(2,1, "zx10r")
console.log(bike.length,bike)
