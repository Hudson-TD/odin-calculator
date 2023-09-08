const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const equalsButton = document.getElementById("equals");
const deleteButton = document.getElementById("delete");
const allClearButton = document.getElementById("all-clear");
let outputText = document.getElementById("output");

let prevValue = "";
let currentValue = "";
let operation = undefined;
let operationClickCounter = 1;
let result;

function operate(operation) {
  switch (operation) {
    case "+":
      result = Number(prevValue) + Number(currentValue);
      break;
    case "-":
      result = Number(prevValue) - Number(currentValue);
      break;
    case "*":
      result = Number(prevValue) * Number(currentValue);
      break;
    case "÷":
      result = Number(prevValue) / Number(currentValue);
      break;
    default:
      return;
  }

  if (result.toString().includes(".") && result.toString().length > 12) {
    outputText.innerText = result.toFixed(4);
  } else {
    outputText.innerText = result;
  }
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operationClickCounter === 1) {
      if (button.innerText === "." && prevValue.includes(".")) return;
      prevValue += button.innerText;
      outputText.innerText = prevValue;
    } else if (operationClickCounter === 2) {
      if (button.innerText === "." && currentValue.includes(".")) return;
      currentValue += button.innerText;
      outputText.innerText = currentValue;
    } else if (operationClickCounter >= 3) {
      if (button.innerText === "." && currentValue.includes(".")) return;
      currentValue += button.innerText;
      outputText.innerText = currentValue;
    }
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    operationClickCounter++;
    if (operationClickCounter >= 3) {
      operate(operation);
      prevValue = result.toString();
      currentValue = "";
    }
    operation = button.innerText;
  });
});

equalsButton.addEventListener("click", (button) => {
  operate(operation);
});

allClearButton.addEventListener("click", (button) => {
  console.log(`AC clicked`);
  prevValue = "";
  currentValue = "";
  operation = undefined;
  operationClickCounter = 1;
  outputText.innerText = "";
});

deleteButton.addEventListener("click", () => {
  let updatedValue;
  if (operationClickCounter <= 1) {
    updatedValue = prevValue.slice(0, prevValue.length - 1);
    prevValue = updatedValue;
    outputText.innerText = prevValue;
  }
  if (operationClickCounter > 1) {
    updatedValue = currentValue.slice(0, currentValue.length - 1);
    currentValue = updatedValue;
    outputText.innerText = currentValue;
  }
});
