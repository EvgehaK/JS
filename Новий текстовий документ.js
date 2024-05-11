function setupCalculator() {
    const calculator = document.getElementById('calculator');

    const display = calculator.querySelector('.display');

    const buttons = calculator.querySelectorAll('button');

    let firstOperand = '';
    let operator = '';
    let waitingForSecondOperand = false;

    function updateDisplay(value) {
        display.textContent = value;
    }

    function buttonClick(event) {
        const target = event.target;
        const buttonValue = target.textContent;

        if (!isNaN(buttonValue)) {
            if (waitingForSecondOperand) {
                updateDisplay(buttonValue);
                waitingForSecondOperand = false;
            } else {
                updateDisplay(display.textContent === '0' ? buttonValue : display.textContent + buttonValue);
            }
        }

        if (target.classList.contains('operator')) {
            if (firstOperand === '') {
                firstOperand = display.textContent;
            } else if (operator) {
                const result = calculate(parseFloat(firstOperand), parseFloat(display.textContent), operator);
                updateDisplay(result);
                firstOperand = result;
            }
            operator = buttonValue;
            waitingForSecondOperand = true;
        }

        if (buttonValue === '=') {
            const result = calculate(parseFloat(firstOperand), parseFloat(display.textContent), operator);
            updateDisplay(result);
            firstOperand = result;
            operator = '';
            waitingForSecondOperand = true;
        }

        if (buttonValue === 'C') {
            updateDisplay('0');
            firstOperand = '';
            operator = '';
            waitingForSecondOperand = false;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', buttonClick);
    });
}

function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}

window.addEventListener('DOMContentLoaded', setupCalculator);
