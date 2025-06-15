function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return a / b;
}
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operation = prompt(
  "Choose an operation: add, subtract, multiply, or divide"
);
let result;
if (operation === "add") {
  result = add(num1, num2);
} else if (operation === "subtract") {
  result = subtract(num1, num2);
} else if (operation === "multiply") {
  result = multiply(num1, num2);
} else if (operation === "divide") {
  result = divide(num1, num2);
} else {
  result = "Invalid operation selected.";
}
alert("The result is: " + result);
console.log("The result is: " + result);
