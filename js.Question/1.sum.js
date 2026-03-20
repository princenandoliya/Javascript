//sum method 1 using function

function sum(a,b){
    let sum=a+b;

    console.log("sum : ",sum)

}

sum(10,90)

//method 2 using loop

const number=[90,80,70,60];
let result=0;

for(let i=0;i<number.length;i++){
    

    result+=number[i];
}

console.log("sum : ",result)