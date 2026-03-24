let vote = new Promise((resolve,reject)=>{
    let age = 19;

    if(age >= 18){
        resolve("you can give vote")
    }else{
        reject("you can't give vote")
    }
})

.then((msg)=> console.log(msg))
.catch((err)=> console.log(err))

//2

let car = new Promise((resolve,reject)=>{
    let age = 17;

    if(age >= 18){
        resolve("you can drive a car")
    }else{
        reject("you can't drive a car")
    }
})

.then((msg)=> console.log(msg))
.catch((err)=> console.log(err))
