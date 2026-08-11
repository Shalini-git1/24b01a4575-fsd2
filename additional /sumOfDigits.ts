let inputValue: number = 12345;
let totalSum: number = 0;

while (inputValue > 0) {
    let extractedDigit: number = inputValue % 10;
    totalSum += extractedDigit;
    inputValue = Math.floor(inputValue / 10);
}

console.log("Sum of Digits =", totalSum);
