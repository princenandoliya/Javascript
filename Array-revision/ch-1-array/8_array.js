let num = [1,2,3,4,5,6,7,8,9]
console.log(num.find((a) => a < 5))

const index = num.findIndex((x) => x > 5);
console.log(num[index])



console.log(num.some((a) => a > 8))


console.log(num.every((q)=> q > 0))