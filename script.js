class Calculator {
  constructor(prevNumberText, currentNumberText) {
    this.prevNumberText = prevNumberText;
    this.currentNumberText = currentNumberText;
    this.clear();
  }

  clear() {
    this.currentNumberText = '';
    this.c
  }
}

let displayText = document.getElementById("screen");
const numbers = document.querySelectorAll(".numerical-button");
const operands = document.querySelectorAll(".operand-button");
const clearBtn = document.getElementById("clear-button");
const submitBtn = document.getElementById("submit-button");

operands.forEach((button) => {
  button.addEventListener("click", (e) => {
    operandClicked = true;
    selectedOperand = e.target.value;
    console.log(selectedOperand);
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

function operate() {
  if (selectedOperand === "add") {
    let sum = add(Number(numOne), Number(numTwo));
    let result = sum;
    displayText.innerText = result;
  } else if (selectedOperand === "subtract") {
    let difference = subtract(Number(numOne), Number(numTwo));
    let result = difference;
    displayText.innerText = result;
  } else if (selectedOperand === "multiply") {
    let product = multiply(Number(numOne), Number(numTwo));
    displayText.innerText = product;
    let result = product;
    displayText.innerText = result;
  } else if (selectedOperand === "divide") {
    let quotient = divide(Number(numOne), Number(numTwo));
    displayText.innerText = quotient;
    let result = quotient;
    displayText.innerText = result;
  }
}

function reset() {
  numOne = "";
  numTwo = "";
  result = "";
  operandClicked = false;
  displayText.innerText = "";
}

clearBtn.addEventListener("click", reset);
submitBtn.addEventListener("click", operate);
