let numOne = "";
let numTwo = "";
let operandClicked = false;

let displayText = document.getElementById("screen");
let numbers = document.querySelectorAll(".numerical-button");
let operands = document.querySelectorAll(".operand-button");

operands.forEach((button) => {
  button.addEventListener("click", (e) => {
    operandClicked = true;
    console.log(operandClicked);
    displayText.innerText = e.target.innerText;
  });
});

numbers.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (operandClicked === false) {
      numOne += e.target.value;
      console.log(`numOne: ${numOne}`);
      console.log(typeof numOne);
      displayText.innerText = numOne;
    } else {
      numTwo += e.target.value;
      console.log(`numTwo: ${numTwo}`);
      console.log(typeof numTwo);
      displayText.innerText = numTwo;
    }
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
