let decimalValue: number = 25;
let binaryResult: string = "";

if (decimalValue === 0) {
    binaryResult = "0";
} else {
    let tempValue: number = decimalValue;

    while (tempValue > 0) {
        binaryResult = (tempValue % 2) + binaryResult;
        tempValue = Math.floor(tempValue / 2);
    }
}

console.log("Binary Equivalent =", binaryResult);