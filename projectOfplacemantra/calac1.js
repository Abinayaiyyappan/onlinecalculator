// calculator.js

let currentInput = '0'; // Store the current input string
let previousInput = ''; // Store the previous number/input
let currentOperation = ''; // Store the current operation (+, -, *, /, %)
let memory = 0; // Store memory value

const display = document.getElementById('display');

// Function to clear the display
function clearDisplay() {
  currentInput = '0';
  previousInput = '';
  currentOperation = '';
  display.innerText = currentInput;
}

// Function to append a number to the current input
function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number.toString();
  } else {
    currentInput += number.toString();
  }
  display.innerText = currentInput;
}

// Function to append a decimal point if not already present
function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    display.innerText = currentInput;
  }
}

// Function to set the operation (+, -, *, /, %, etc.)
function setOperation(operator) {
  if (previousInput !== '') {
    calculateResult();
  }
  currentOperation = operator;
  previousInput = currentInput;
  currentInput = '';
}

// Function to perform the calculation when "=" is pressed
function calculateResult() {
  let result;
  const previous = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (currentOperation) {
    case '+':
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '*':
      result = previous * current;
      break;
    case '/':
      if (current === 0) {
        result = 'Error';
      } else {
        result = previous / current;
      }
      break;
    case '%':
      result = previous % current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperation = '';
  previousInput = '';
  display.innerText = currentInput;
}

// Function to calculate the square root of the current input
function calculateSquareRoot() {
  const number = parseFloat(currentInput);
  const result = Math.sqrt(number);
  currentInput = result.toString();
  display.innerText = currentInput;
}

// Memory Functions
function memoryStore() {
  memory = parseFloat(currentInput);
}

function memoryRecall() {
  currentInput = memory.toString();
  display.innerText = currentInput;
}

function memoryClear() {
  memory = 0;
}

