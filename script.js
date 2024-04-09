function calculateFactorial() {
  const number = document.getElementById("numberInput").value;
  document.getElementById("result").innerText =
    "Factorial: " + factorialWithLoop(number);
}

function factorialWithLoop(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
