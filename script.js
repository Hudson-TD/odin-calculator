let x = 0;
let y = 0;
let z = null;

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
  return operator(numberOne, numberTwo);
}
