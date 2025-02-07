const kgInput = document.querySelector('.kg-field');
const lbsInput = document.querySelector('.lbs-field');
const kmInput = document.querySelector('.km-field');
const milesInput = document.querySelector('.miles-field');
const litersInput = document.querySelector('.liters-field');
const gallonsInput = document.querySelector('.gal-field');
const m2Input = document.querySelector('.m-field');
const ft2Input = document.querySelector('.ft-field');


function kgToLbs() {
    const kgInputValue = parseFloat(kgInput.value);
    if(isNaN(kgInputValue)) {
        lbsInput.value = "";
        return;
    }
    
    const calc = (kgInputValue * 2.20462).toFixed(2);
    lbsInput.value = calc;
}

function kmToMiles() {
    const kmInputValue = parseFloat(kmInput.value);
    if(isNaN(kmInputValue)) {
        milesInput.value = "";
        return;
    }

    const calc = (kmInputValue * 0.621371).toFixed(2);
    milesInput.value = calc;
}

function literToGal() {
    const litersInputValue = parseFloat(litersInput.value);
    if(isNaN(litersInputValue)) {
        gallonsInput.value = "";
        return;
    }

    const calc = (litersInputValue * 0.264172).toFixed(2);
    gallonsInput.value = calc;
}

function mToFt() {
    const m2Value = parseFloat(m2Input.value);
    if(isNaN(m2Value)) {
        ft2Input.value = "";
        return;
    }
    
    const calc = (m2Value * 10.7639).toFixed(2);
    ft2Input.value = calc;
}

kgInput.addEventListener("input", kgToLbs);
kmInput.addEventListener("input", kmToMiles);
litersInput.addEventListener("input", literToGal);
m2Input.addEventListener("input", mToFt);