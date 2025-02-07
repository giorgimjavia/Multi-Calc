const heightInput = document.querySelector(".height-field");
const weightInput = document.querySelector(".weight-field");
const button = document.querySelector(".bmi-button");
const resultDisplay = document.querySelector(".bmi-display");


function calc() {
    const heightInputValue = parseFloat(heightInput.value);
    const weightInputValue = parseFloat(weightInput.value);

    const calculation = (weightInputValue / Math.pow(heightInputValue, 2)).toFixed(2);

    resultDisplay.innerHTML = calculation
    if(heightInput.value === "" || weightInput.value === "") {
        resultDisplay.value = "please enter value";
    } else {
        calculation;
        heightInput.value = "";
        weightInput.value = "";
    }
}


button.addEventListener("click", calc);