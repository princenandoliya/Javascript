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