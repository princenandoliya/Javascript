document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let age = document.getElementById("age").value
    let number = document.getElementById("number").value

    let result = document.getElementById("result")

    if(!name || !email || !age || !number){
        result.innerText = "all field are required"
        return;
    }
    if(!email.includes("@") || !email.includes(".")){
        result.textContent = "enter a vaild email"
        return;
    }
    if (password.length < 6) {
    result.textContent = "Password must be at least 6 characters";
    return;
}

    if (isNaN(age)) {
        result.innerHTML = "Age must be numeric";
        return;
    }

    result.textContent="registration successful"
})