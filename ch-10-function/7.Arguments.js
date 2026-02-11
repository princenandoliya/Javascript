function all(){
    let num = 0;

    for(let i = 0;i < arguments.length;i++){
        num += arguments[i]
    }
    console.log(num)
}

all(10,20,30,40,50,60)


function num(){
    let all = 0;

    for(let i = 0;i < arguments.length;i--){
        all -= arguments[i]
    }
    console.log(all)
}

num(100,200,300)