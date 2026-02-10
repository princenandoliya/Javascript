document.getElementById("form").addEventListener("submit",(e) => {

    e.preventDefault()

    let num = document.getElementById("number").value

    let result = document.getElementById("result");

    let reverse = "";

    for(let i = num.length - 1;i >= 0;i--){
        reverse += num[i];
    }

    result.textContent = `Reverse Number = ${reverse}`
});