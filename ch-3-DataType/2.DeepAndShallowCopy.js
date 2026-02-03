// shallow copy in non permeative data types
// passed by reference

let men1 = { NAME: "Prince", AGE: "18" };

console.log("men1", men1);

let men2 = men1;
console.log("men2", men2);

men2.NAME = "prince nandoliya"

console.log("After change men2", men2);
console.log("After vhnage men1", men1);

console.log(" ")

//  deep copy  in permeative data types
// passed by value

let A = 12;
let B = A;

B = 20;

console.log("A", A)
console.log("B", B)

