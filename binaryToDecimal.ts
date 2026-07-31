let binaryValue: string = "11001";
let decimalResult: number = 0;
let powerValue: number = 0;

for (let position: number = binaryValue.length - 1; position >= 0; position--) {
    if (binaryValue[position] === "1") {
        decimalResult += Math.pow(2, powerValue);
    }
    powerValue++;
}

console.log("Decimal Equivalent =", decimalResult);