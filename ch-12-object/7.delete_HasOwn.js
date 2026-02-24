const student={
    name:"prince",
    age:"18",
    address:"bvn"
}

delete student.age;

console.log(student)

//HasOwnProperties

console.log(student.hasOwnProperty("age"))

//key

console.log(Object.keys(student))

//value

console.log(Object.values(student))


///2

const car={
    name: "bmw m5",
    carcompany: "bmw",
    carprice: "2.5 cr"
}

delete car.carcompany;
console.log(car)

//HasOwnProperties

console.log(car.hasOwnProperty("carcompany"))

//key

console.log(Object.keys(car))

//value

console.log(Object.values(car))

