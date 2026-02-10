document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()

  let result =  document.getElementById("result")

  let all = Number(document.getElementById("all").value)

  if((all % 400 === 0)|| (all % 4 === 0 && all % 100 !== 0)){
    result.textContent = all + "is a leap year";
  }else{
    result.textContent = all + "is a not leap year"
  }


})