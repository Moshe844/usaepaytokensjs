// This function clear all the values
function clearScreen() {
  document.getElementById("result").value = "";

  message = document.createElement("div");
  message.innerText = "Please enter at least 2 digits to start";
  message.className = "coloring";
  // document.body.appendChild(message);
  document.getElementById("popup-container").appendChild(message);
}

// This function display values
function display(value) {
  document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}

function clearScreen() {
  document.getElementById("result").value = "";
}
