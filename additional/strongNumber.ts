let inputNumber: number = 145;
let originalValue: number = inputNumber;
let factorialSum: number = 0;

while (inputNumber > 0) {
    let currentDigit: number = inputNumber % 10;
    let factorialValue: number = 1;

    for (let counter: number = 1; counter <= currentDigit; counter++) {
        factorialValue *= counter;
    }

    factorialSum += factorialValue;
    inputNumber = Math.floor(inputNumber / 10);
}

if (factorialSum === originalValue) {
    console.log(originalValue + " is a Strong Number");
} else {
    console.log(originalValue + " is Not a Strong Number");
}
