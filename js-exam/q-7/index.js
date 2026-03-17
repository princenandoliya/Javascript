document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let num = Number(document.getElementById("num").value);
  let result = document.getElementById("result");

  let output = "";

  for (let i = 1; i <= 10; i++) {
    output += `${num} * ${i} = ${num * i} <br>`;
  }

  result.innerHTML = output;
});