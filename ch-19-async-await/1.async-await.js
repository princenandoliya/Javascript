let restaurant = true;

function placeOrder(){
    return new Promise((resolve,reject)=>{
        console.log("placing order")

        setTimeout(() => {
            if(restaurant){
                resolve("order place successfully")
            }else{
                reject("restaurant is closed")
            }
            
        }, 1000);
    })
}

function preparefood(){
    return new Promise ((resolve)=>{
        console.log("prepare food")

        setTimeout(() => {
            resolve("food is ready")
        }, 2000);
    })
}

function deliverfood(){
    return new Promise ((resolve)=>{
        console.log("delivering food....")

        setTimeout(() => {
            resolve("food deliverd")
        }, 1000);
    })
}

async function orderprocess() {
    try{
        let order = await placeOrder();
        console.log(order)

        let food = await preparefood()
        console.log(food)

        let delivery = await deliverfood()
        console.log(delivery)
    }catch(err){
        console.log(err)
    }finally{
        console.log("thank you for ordering food")
    }
    
}

orderprocess()