document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault()

    let all = document.getElementById("all").value

    let result = document.getElementById("result")


    if(all >= "a" && all <= "z"){
        if(all === "a" || all === "e" || all === "i" || all === "o" || all === "u"){
            result.textContent = all + " is a vowel";
        }else{
            result.textContent = all + " is a Consonant";
        }

    }else{
        result.textContent = "Please Enter a vaild Alphabet";
    }
})