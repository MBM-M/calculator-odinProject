/*let operation = prompt("Select: add, subtract, multiply, divide: ");

//a = first number of operation
let a = prompt("Enter the first number: ");
//b = second number of operation
let b = prompt("Enter the second number: ");
a = +a;
b = +b;
*/

function add(a, b) {
    let result = a + b;
    console.log(result);
}

function subtract(a, b) {
    let result = a - b;
    console.log(result);
}

function multipy(a, b) {
    let result = a * b;
    console.log(result);
}

function divide(a, b) {
    let result = a / b;
    console.log(result);
}

/*function operate(a, b, operation){
    if (operation == 'add') {
        add(a, b);
    }else if (operation == 'subtract') {
        subtract(a, b);
    }else if (operation == 'multiply') {
        multiply(a, b);
    }else if (operation == 'divide') {
        divide(a, b);
    }else{
        alert('Invalid operation. Refresh the page.')
    }
}

//operate(a, b, operation);*/


let displayValue = '0';
let num1 = '';
let num2 = '';
let operator = '';

function addToDisplay(num) {
    if (displayValue == 0){
        displayValue = '';
    }
    displayValue += num;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    if (num1 == '') {
        num1 = displayValue;
        displayValue = 0;
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = 0;
    num1 = '';
    num2 = '';
    operator = '';
    updateDisplay();
}

function calculate(){
    if (operator !== "" && num2 === "" && displayValue !== "") {
        num2 = displayValue;
        let result = operate(parseFloat(num1), parseFloat(num2), operator);
        displayValue = result.toString();
        num1 = "";
        num2 = "";
        operator = "";
        updateDisplay();
    }
}

function operate(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            }else{
                return 'ERROR';
            }
    }
}