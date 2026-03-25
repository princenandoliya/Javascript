const car = new Promise ((resolve,reject)=>{
    let budgetApproved  = true;

    if(budgetApproved ){
        console.log("car buying process initiated")
        setTimeout(()=>{
            console.log("checking avilable car models....")
            let carvailable = true;

            if(carvailable){
                resolve("car selected successfully")
            }else{
                reject("no car available in your budget")
            }
        },3000)
    }else{
        reject("budget not approved")
    }
});

car
.then((carstatus)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("status",carstatus)
            resolve();
        },2000)
    })
})

.then(()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("process car loan / payment...")
            resolve();
        },2000)
    })
})

.then(()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("car delivered scheduled...")
            resolve();
        },2000)
    })
})

.then(()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("car delivered sucessfully..")
            resolve();
        },2000)
    })
})

.catch((err)=>{
    console.log("error:",err)
})

.finally(()=>{
    setTimeout(() => {
        console.log("enjoy your new car ")
    }, 2000);
})

//2
// const cab = new Promise ((resolve,reject)=>{
//     let carbooked = true;

//     if(carbooked){
//         console.log("cab booking initiated")
//         setTimeout(()=>{
//             console.log("serching for near by drivers....")
//             let driverfound = true;

//             if(driverfound){
//                 resolve("driver assingned successfully")
//             }else{
//                 reject("no driver available")
//             }
//         },3000)
//     }else{
//         reject("cab booking is failed")
//     }
// });

// cab
// .then(()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("driver is on the way..")
//             resolve();
//         },2000)
//     })
// })

// .then(()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("trip is started...")
//             resolve();
//         },2000)
//     })
// })

// .then(()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("trip completed successfully..")
//             resolve();
//         },2000)
//     })
// })

// .catch((err)=>{
//     console.log("error:",err)
// })

// .finally(()=>{
//     setTimeout(() => {
//         console.log("rate your ride")
//     }, 2000);
// })

