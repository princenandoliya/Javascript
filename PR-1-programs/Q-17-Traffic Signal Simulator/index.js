document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let signal = document.getElementById("signal").value;
  let result = document.getElementById("result");

  let red = document.getElementById("red");
  let yellow = document.getElementById("yellow");
  let green = document.getElementById("green");

  if (signal === "red") {
    result.textContent = "🛑 Stop";
  } else if (signal === "yellow") {
    result.textContent = "⚠️ Ready";
  } else if (signal === "green") {
    result.textContent = "✅ Go";
  }
});
