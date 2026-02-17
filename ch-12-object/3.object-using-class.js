class student{
    constructor(name,id,course,adderss){
        this.name = name;
        this.grid = id;
        this.course = course;
        this.adderss = adderss;
    }
}

let student1 = new student("alice",110,"fd","surat")
let student2 = new student("bob",123,"video edition","bhavnagar")
let student3 = new student("otis",143,"graphic","ahmedabad")

console.log("student 1",student1)
console.log("student 2",student2)
console.log("student 3",student3)

console.log(student)


//2

class car{
    constructor(name,company,price){
        this.name = name;
        this.company = company;
        this.price = price;
       
    }
}

let car1 = new car("Thar","Mahindra","20 lakh")
let car2 = new car("bmw m4","bmw","2 cr")
let car3 = new car("Fortuner","toyota","40 lakh")


console.log("car 1",car1)
console.log("car 2",car2)
console.log("car 3",car3)
