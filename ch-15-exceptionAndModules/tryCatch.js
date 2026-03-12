
//1.syntax error
//A syntax error occurs when the code does not follow the correct rules or structure of the programming language.

// le number = 33
let number = 20
console.log(number)
 

//2.Runtime error 
//A runtime error happens when the program runs and something goes wrong.

let all = 20
console.log(all)
// console.log(al)

//try & catch & finally
//try: Code that may cause an error.
//catch: Runs if an error happens.
//finally: Always runs whether an error occurs or not.


let age = 2

try{
    if( age >= 18){
    console.log("you can give vote");
}else{
    throw new Error("you can't give vote");
}
}
catch(Error){
    console.log(Error.message);
}finally{
    console.log("age checker")
}