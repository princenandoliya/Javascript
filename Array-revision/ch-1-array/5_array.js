

const car = [
    "Thar",
    "swift",
    "bmw",
    "Audi",
    "Verna"
]


console.log("car",car)

console.log("car after join method",car.join(" "))


 let number = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
 ];


 console.log("number",number)
 console.log("number after flat mrhtod",number.flat())


 let num = [ 
    [1,2,3,[5,5,6,[8,9,8,[4,4,4,[6,3,6,[9,8,9,[465]]]]]]],
    [8,8,8,[5,5,5,[6,6,6,[9,4,9,[4,4,6,[0,1,2,[60]]]]]]],
    [9,8,7,[0,2,0,[5,5,4,[5,6,5,[789]]]]]
 ]

 console.log("num",num)
 console.log("num after flat Infinity",num.flat(Infinity))


 console.log("car",car)
 console.log("car after slice",car.slice(2,4))
