//split method = split a string into an array of substrings
//1
let car = "hi how are you "
console.log(car.split(" "))
console.log(car.split(""))
console.log(car.split("h"))

//2
let bike = "hello sir"
console.log(bike.split(""))
console.log(bike.split(" "))
console.log(bike.split("l"))

//startswith method = startwith method whether a string begins with specified charecters 
//1
let st = "hi what is your name"
console.log(st.startsWith("h"))
console.log(st.startsWith("what"))

//2
let en = "hi what is your age"
console.log(en.startsWith("hi"))
console.log(en.startsWith("is"))

//substring method = extracts charecter,between two indices ,form a string and returns the substring.
//1
let all = "i am prince"
console.log(all.substring(0,5))
console.log(all.substring(-2))

//2
console.log(all.substring(2,4))
console.log(all.substring(-3))

///tolowercase method = return a string converted to lowercase letters

let text = "HI WHAT IS YOUR NAME"
console.log(text.toLowerCase())

//touppercase method = return a string converted to uppercase letters
let text1 = "hi what is your name"
console.log(text1.toUpperCase())

//trim method = return a string a removed whitespace

//1
let letter = "   hi    "
console.log("letter length",letter.length)
console.log(letter.trim().length)

//2
let letter1 = "  hello     "
console.log("letter1 length",letter1.length)
console.log(letter1.trim().length)

//starting removing trim
//1
let move = "   how   "
console.log("move length",move.length)
console.log(move.trimStart().length)

//2
let move1 = "      hi    "
console.log("move1 length",move1.length)
console.log(move1.trimStart().length)

//ending removing trim
//1
let hi = "  hello      "
console.log("hi length",hi.length)
console.log(hi.trimEnd().length)

//2
let hi1 = "    hi      "
console.log("hi1 length",hi1.length)
console.log(hi1.trimEnd().length)

