document.getElementById("button").addEventListener("click", (e) => {

    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    document.getElementById("result");

    let temp = a;
    a = b;
    b = temp;

     result.innerHTML =
    "<b>Swapped Values</b><br>" +
    "a = " + a + "<br>" +
    "b = " + b;

});