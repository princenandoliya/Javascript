// map() method
// map() runs a function on every array element and returns a new array.

let num = [1,2,3,4,5,6,7,8,9,10];

console.log("num :-",num)

let newArray = num.map((num)=> num * 3)

console.log("new num array :-",newArray)


//2

let personDetails = [
    {name: "Ankit",age: "20",city: "bvn",profession: "web developer"},
    {name: "Amit",age: "21",city: "Ahmedabad",profession: "Full Stack Developer"},
    {name: "Prince",age: "19",city: "Gandhinagar",profession: "Game Developer"},
    {name: "Dharmik",age: "19",city: "Surat",profession: "Mobile App Developer"},
]

console.log("personDetails :-",personDetails)

let newperson = personDetails.map((personDetails)=>{
    return personDetails["profession"]    
})
console.log("new array :-",newperson)