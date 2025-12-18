const operator = document.getElementById("operator");
const button = document.getElementById("calcBtn");

const operatorTextMap = {
    "+": "Add",
    "-": "Subtract",
    "*": "Multiply",
    "/": "Divide"
};

// 下拉選單改變時，更新按鈕文字
operator.addEventListener("change", function () {
    button.textContent = operatorTextMap[operator.value];
});

button.addEventListener("click", calculate);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function calculate() {
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);
    const op = document.getElementById("operator").value;
    let result;

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").textContent = "Result: Invalid input";
        return;
    }

    switch (op) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    }

    if (typeof result === "number") {
        result = result.toFixed(2);
    }

    document.getElementById("result").textContent = "Result: " + result;
}