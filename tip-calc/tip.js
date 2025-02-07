const billAmount = document.querySelector('.bill-field');
const tipPercentage = document.querySelector('.tip-field');
const calculateButton = document.querySelector('.tip-button');
const displayResult = document.querySelector('.tip-display');

function calc() {
    const billAmountValue = parseFloat(billAmount.value);
    const tipPercentageValue = parseFloat(tipPercentage.value);

    if (billAmount.value === "" || tipPercentage.value === "") {
        displayResult.innerHTML = "Please enter the value";
        return;
    }
    
    const tipAmount = billAmountValue * (tipPercentageValue / 100);
    const totalAmount = billAmountValue + tipAmount;

    displayResult.innerHTML = `Tip: $${tipAmount.toFixed(2)}<br>Total Bill: $${totalAmount.toFixed(2)}`;

    billAmount.value = "";
    tipPercentage.value = "";
}

calculateButton.addEventListener('click', calc);
