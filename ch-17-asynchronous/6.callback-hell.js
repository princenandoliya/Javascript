
function  selectMovie(callback){
    setTimeout(()=>{
        console.log("Movie selected:")
         callback();
    },1000)
   
}

function  bookTicket(callback){
    setTimeout(()=>{
        console.log("Ticket booked for Movie")
         callback();
    },1000)
   
}

function makePayment(callback){
    setTimeout(()=>{
        console.log("Payment done for Movie")
         callback();
       },1000)
}

function watchMovie(callback){
    setTimeout(()=>{
        console.log("Watching Movie")
         callback();
    },1000)
}

selectMovie(()=>{
    bookTicket(()=>{
        makePayment(()=>{
            watchMovie(()=>{
               setTimeout(()=>{
                 console.log("Enjoy the show 🍿")
               },2000)
            })
        })
    })
})
