document.getElementById("form").addEventListener("submit",(e)=>{

    e.preventDefault()
    let marks  = document.getElementById("marks").value;

    let result = document.getElementById("result");

    if(marks >= 90){
        result.innerHTML = `<h1>you hae achieved A gread</h1>`
    }else if(marks >= 70){
        result.innerHTML = `<h1> you have achieved b grade</h1>`
    }else if(marks >= 50){
        result.innerHTML =  `<h1> you have achieved c grade</h1>`
    }else if(marks >= 35){
        result.innerHTML =  `<h1> you have achieved d grade</h1>`
    }else{
        result.innerHTML = `<h1> you have fail this Exam </h1>`
    }












})