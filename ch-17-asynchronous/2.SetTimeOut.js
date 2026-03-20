// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

// The commonly used syntax of JavaScript setTimeout is:

// setTimeout(function, milliseconds);
// Its parameters are:

// function - a function containing a block of code
// milliseconds - the time after which the function is executed
// The setTimeout() method returns an intervalID, which is a positive integer.


// const time = () =>{
//     console.log("hello")
//     setTimeout(()=>{
//         console.log("how are you")
//     },4000)
// }
 
// time();

//2

const currentyear = ()=>{
    console.log("checking current year...")
    setTimeout(()=>{
        let currentyear = new Date().getFullYear();
        console.log("currentyear is",currentyear);
    },4000)
}

currentyear();
