// some method
// some() checks if at least one element in the array matches the condition.
let age = [18,12,13,19,20,29,30,41]

let olderage = age.some((num)=>{
    return num > 19
})

console.log(olderage)

//reverse method
// reverse() reverses the order of elements in an array (last becomes first and first becomes last).

let number = [1,2,3,4,5,6,7,8,9,10]

console.log("number",number)
console.log("reverse number",number.reverse())

//values method 
// values() returns an iterator containing the values of the array.

let car = ["bmw m5","thar","audi"]

for(let values of car){
    console.log("values",values)
}