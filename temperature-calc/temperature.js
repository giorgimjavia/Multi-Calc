const celsiusInput = document.querySelector('.c-field');
const fahrenheitInput = document.querySelector('.f-field');

function cToF() {
    const celsiusValue = parseFloat(celsiusInput.value);
    if (isNaN(celsiusValue)) {
        fahrenheitInput.value = "";
        return;
    }

    const calc = ((celsiusValue * 9/5) + 32).toFixed(2);
    fahrenheitInput.value = calc;
}

function fToC() {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    if (isNaN(fahrenheitValue)) {
        celsiusInput.value = "";
        return;
    }

    const calc = ((fahrenheitValue - 32) * 5/9).toFixed(2);
    celsiusInput.value = calc;
}

celsiusInput.addEventListener("input", cToF);
fahrenheitInput.addEventListener("input", fToC);
