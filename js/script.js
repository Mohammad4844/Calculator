let displayValue = "";
let value1 = null;
let value2 = null;
let currentOperator = "";

let operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => button.addEventListener("click", () => {
    let operator = button.textContent;
    // When someone clicks an operator before entering any number
    if (displayValue === "" && currentOperator === "" && value1 === null) {
        alert("Enter a number first!");
        return;
    }
    if (currentOperator === "" || currentOperator === "=") {
        if (value1 === null) 
            value1 = Number.parseFloat(displayValue); 
     } 
    else if (displayValue !== "") { // Default case
        value2 = Number.parseFloat(displayValue);
        try {
            let ans = operate(value1, value2, currentOperator);
            outputToDisplay(Math.round((value1 = ans) * 10000) / 10000);
        } catch (err) {
            alert(err);
            clearButton.click();
        }
     }
    currentOperator = operator;
    displayValue = "";
}));

let buttons = document.querySelectorAll(".number");
buttons.forEach(button => button.addEventListener("click", () => outputToDisplay(displayValue += button.textContent)));

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    displayValue = currentOperator = "";
    value1 = value2 = null;
    outputToDisplay("");
});

let deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {
    if (displayValue === "") return;
    displayValue = displayValue.substring(0, displayValue.length - 1);
    outputToDisplay(displayValue);
});

let decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
    if (!displayValue.includes(".")) // Prevents multiple decimal points from being added
        outputToDisplay(displayValue += "."); 
});

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => {
    if (y === 0) throw "You can't divide by 0!";
    return x / y;
};

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

const outputToDisplay = x => document.querySelector(".display").textContent = x;