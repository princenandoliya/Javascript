

function hotel(rating, room, staff) {
    this.rating = rating,
        this.room = room,
        this.staff = staff

}
let hotel1 = new hotel(3, 60, 30)
console.log("hotel 1 detials", hotel1)

//2
function car(company, model, price) {
    this.company = company,
        this.model = model,
        this.price = price
}

let car1 = new car("bmw","m4","2 cr",)
console.log("car 1 detials",car1)