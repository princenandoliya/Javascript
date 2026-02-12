//match method = searches a string for a value, or a regular expression ,and returns the matches
//1
let all = "hi how are you"
console.log(all.match(" are"))
console.log(all.match("where"))

//2
let all1 = "where are you" 
console.log(all1.match("you"))
console.log(all1.match("how"))


//repeat method = returns new string with a number of number of copies of strings 
//1
let men = "my dream car is bmw"
console.log(men.repeat(2))

//2
let men1 = "my dream bike is gt650"
console.log(men1.repeat(3))

//replace method = searches a string for a pattern and return a new string where first match are replaced
//1
let bike = "my dream bike"
console.log(bike.replace("m","M"))

//2
console.log(bike.replaceAll("e","E"))



//search method = searches a string  for a value, or regular expression, and returns the index(position) of the match
//1
let car = "my dream car is bmw"
console.log("search",car.search("e"))
console.log("index",car.indexOf("b"))

//2
console.log("search",car.search("w"))
console.log("index",car.indexOf("m"))

// slice method = extracts a part of a string and returns a new string 
//1
let car1 = "my dream bike is gt650"
console.log(car1.slice(3))

//2
console.log(car1.slice(3,14))