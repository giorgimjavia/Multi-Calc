const priceAmount = document.querySelector('.price-field');
const discountPercentage = document.querySelector('.discount-field');
const calculateButton = document.querySelector('.discount-button');
const displayResult = document.querySelector('.discount-display');

function calc() {
    const priceAmountValue = parseFloat(priceAmount.value);
    const discountPercentageValue = parseFloat(discountPercentage.value);

    if (isNaN(priceAmountValue) || isNaN(discountPercentageValue)) {
        displayResult.innerHTML = "Please enter the value";
        return;
    }

    const calculation = (priceAmountValue - (priceAmountValue * (discountPercentageValue / 100))).toFixed(2) + " $";
    displayResult.innerHTML = calculation;

    priceAmount.value = "";
    discountPercentage.value = "";
}

calculateButton.addEventListener('click', calc);
