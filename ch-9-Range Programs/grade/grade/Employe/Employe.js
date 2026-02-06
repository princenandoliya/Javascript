document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()

    document.getElementById("result");

    let Salary = Number(document.getElementById("Salary").value);
    let hraPercent = Number(document.getElementById("hra").value);
    let daPercent = Number(document.getElementById("da").value);
    let taPercent = Number(document.getElementById("ta").value);

    let HRA = (Salary * hraPercent) / 100;
    let DA = (Salary * daPercent) / 100;
    let TA = (Salary * taPercent) / 100;

    let TotalSalary = Salary + HRA + DA + TA;


    result.textContent = "Total Salary ="+ TotalSalary;

})