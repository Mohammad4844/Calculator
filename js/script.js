let displayValue = "";
let value1 = null;
let value2 = null;
let currentOperator = "";

let operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => button.addEventListener("click", () => {
    let operator = button.textContent;
    // When someone clicks an operator before entering a number
    if (displayValue === "" && currentOperator === "" && value1 === null) throw "Enter a number before selecting an operator";
    if (currentOperator === "") {
        if (value1 === null) 
            value1 = Number.parseFloat(displayValue); 
        currentOperator = operator;
     } 
     else if (displayValue === "") { // Case for changing the operator
         currentOperator = operator;
     }
     else { // Default case
        value2 = Number.parseFloat(displayValue);
        let ans = operate(value1, value2, currentOperator);
        document.querySelector(".display").textContent = value1 = ans;
        currentOperator = (operator === "=") ? "" : operator;
     }
     displayValue = "";
}));

let buttons = document.querySelectorAll(".number");
buttons.forEach(button => button.addEventListener("click", () => updateDisplay(button.textContent)));


const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operate = (x, y, operator) => {
    switch(operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
    }
};

const updateDisplay = (x) => {
    document.querySelector(".display").textContent = displayValue += x;
};
