let person = {
    name: "bob",
    age: "23",
    course: "fd",
    city: "bhavnagar"
}

// using .notion

person.designation = "web developer"
console.log(person)


//using []
person["bloodgroup"] = "0+"
console.log(person)

function hotel(rating, room, staff) {
    this.rating = rating,
        this.room = room,
        this.staff = staff

}



hotel.prototype.swimingpool = true;
let hotel1 = new hotel(3, 60, 30,true)
console.log("hotel 1 detials", hotel1.swimingpool)