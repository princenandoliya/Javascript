//filter () method
// filter() returns a new array with elements that match the given condition.

let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

console.log(num)

let evenNumber = num.filter((num)=> num % 2 === 0)

console.log("even Number",evenNumber)

//2

let personDetails = [
    {name: "Ankit",age: "20",city: "bvn",profession: "web developer"},
    {name: "Amit",age: "21",city: "Ahmedabad",profession: "Full Stack Developer"},
    {name: "Prince",age: "19",city: "Gandhinagar",profession: "Game Developer"},
    {name: "Dharmik",age: "19",city: "Surat",profession: "Mobile App Developer"},
]

console.log("personDetails :-",personDetails)

let newArray = personDetails.filter((a)=> a.age < 20).map((a) => a.name)

console.log(newArray)