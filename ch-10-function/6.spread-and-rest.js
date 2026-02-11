// // spread operator

// let num = [1,2,3,4,5,6]

// console.log(...num)

// let num2 = [...num,7,8,9,10,11]

// console.log("num2",num)


// rest oprator

function play(...games){

    console.log("i have play this game", ...games)
    console.log("i am  palying most",games[0])
}
play("free-fire","gta-5","pubg",);