const numberDisplay = document.getElementById('number-display');
let currentNumber = 0;

function updateNumber() {
    currentNumber = Math.floor(Math.random() * 100000);

    numberDisplay.textContent = currentNumber;
}

setInterval(updateNumber, 50);
