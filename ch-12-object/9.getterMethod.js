const person={
    firstname:"prince",
    lastname:"nandoliya",
    get fullname(){
        return this.firstname + " "  + this.lastname;
    }
}

console.log(person.fullname)

//2

const car={
    carname:"bmw m5",
    carcompany:"bmw",
    carprice:"2.5 cr",
    get cardetials(){
        return this.carname + " " + this.carcompany + " " + this.carprice;
    }
}

console.log(car.cardetials)