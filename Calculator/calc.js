let display = document.getElementById('display');
let currentInput = '0';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    if (currentInput === '0') {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentOperation !== null) {
        calculate();
    }
    firstOperand = parseFloat(currentInput);
    currentOperation = operator;
    shouldResetDisplay = true;
}

function calculate() {
    if (currentOperation === null || shouldResetDisplay) return;
    secondOperand = parseFloat(currentInput);
    let result;
    switch (currentOperation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    currentOperation = null;
    updateDisplay();
}

function clearAll() {
    currentInput = '0';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay();
}

function appendDot() {
    if (shouldResetDisplay) {
        currentInput = '0';
        shouldResetDisplay = false;
    }
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput;
}