let person = {
    name: "bob",
    age: "23",
    course: "fd",
    city: "bhavnagar"
}

console.log(person)

// now accessing the value of the person object using . notation

console.log(person.name)
console.log(person.age)

// now accessing the value of the person object using []

console.log(person["course"])


// now distructing

let{name ,course} = person

console.log(name)
console.log(course)

//2
let car = {
    
       carname : "bmw m4",
        carcompany: "bmw",
        carprice : "2 cr"       
    
}
console.log(car)

// now accessing the value of the person object using . notation

console.log(car.carname)
console.log(car.carcompany)

// now accessing the value of the person object using []
console.log(car["carprice"])

// now distructing
let {carname,carcompany} = car

console.log(carname)
console.log(carcompany)