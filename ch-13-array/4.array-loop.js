const phone=[
    "vivo",
    "oppo",
    "OnePlus",
    "Motorola",
    "Xiaomi"
]
// using loop

for(let i = 0;i < phone.length;i++){
    console.log(phone[i]);
}
    

// using for of loop

for(let i of phone){
    console.log(i)
}

// using for each
phone.forEach((phone,index)=>{
    console.log("using each ",index,phone)
})


// Concatenation = combining two values into one

let bike = ["gt 650","kawasaki zx10r","kawasaki z900","r15"]

let shopeitems = phone.concat(bike);

console.log(shopeitems)

console.log(phone.toString())

