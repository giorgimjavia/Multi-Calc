const amountInput = document.querySelector('.loan-field');
const percentageInput = document.querySelector('.loan-monthly');
const durationInput = document.querySelector('.loan-duration');
const button = document.querySelector('.loan-button');
const displayResult = document.querySelector('.loan-display');



    function calc() {
        const amountValue = amountInput.value;
        const percentageValue = percentageInput.value;
        const durationValue = durationInput.value;
    
        const makePercentage = (percentageValue / 100) * amountValue;
        const calculation = (amountValue / durationValue) + (makePercentage / durationValue);
        const fullCalc = calculation * durationValue;

        if(amountValue === "" || percentageValue === "" || durationValue === "") {
            return displayResult.innerHTML = "please enter value";
        }

        displayResult.innerHTML = `${fullCalc} $`;
        amountInput.value = "";
        percentageInput.value = "";
        durationInput.value = "";
        
    }

button.addEventListener('click', calc);
