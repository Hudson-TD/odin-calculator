let numOne = "";
let numTwo = "";
let operandClicked = false;

let displayText = document.getElementById("screen");
let numbers = document.querySelectorAll(".numerical-button");

numbers.forEach((button) => {
  button.addEventListener("click", (e) => {
    numOne += e.target.value;
    console.log(`NumOne: ${numOne}`);
    console.log(typeof numOne);
    displayText.innerText = numOne;
  });
});

function add(inputOne, inputTwo) {
  return inputOne + inputTwo;
}

function subtract(inputOne, inputTwo) {
  return inputOne - inputTwo;
}

function multiply(inputOne, inputTwo) {
  return inputOne * inputTwo;
}

function divide(inputOne, inputTwo) {
  return inputOne / inputTwo;
}

function operate(numberOne, numberTwo, operator) {
  operator(numberOne, numberTwo);
}
