let display = document.getElementById("display");
let operatorButtons = document.querySelectorAll(".operator");
let currentInput = "";
let result = "";

function appendText(value) {
    currentInput += value;
    display.value = currentInput;

    if (display.value !== "0") {
        operatorButtons.forEach(button => {
            button.disabled = false;
        });
    }
}

function clearDisplay() {
    currentInput = "";
    result = "";
    display.value = "0";

    operatorButtons.forEach(button => {
        button.disabled = true;
    });
}

function deleteLastEntry() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;

    if (display.value !== "0") {
        operatorButtons.forEach(button => {
            button.disabled = false;
        });
    }
}

function calculate() {
    try {
        // Check if the current input contains "%" and replace it with "/100*"
        if (currentInput.includes('%')) {
            currentInput = currentInput.replace('%', '/100*');
        }
        
        result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = "Error";
    }
    if (display.value === "0") {
        operatorButtons.forEach(button => {
            button.disabled = true;
        });
    }
}
