//reduce () method

let number = [1,2,3,4,5,6,7]
console.log("number :- "+number)

let sumOfNumber = number.reduce((accumulator,current)=>{
    return accumulator + current;
})

console.log("sumOfNumber:" + sumOfNumber)

//using loop

let sum = 0

for(let i = 0;i < number.length;i++){
    sum += number[i]
}

console.log("sum using loop",sum)