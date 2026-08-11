import {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
} from "./math";

let firstNumber: number = 20;
let secondNumber: number = 5;

console.log("Addition:", addNumbers(firstNumber, secondNumber));
console.log("Subtraction:", subtractNumbers(firstNumber, secondNumber));
console.log("Multiplication:", multiplyNumbers(firstNumber, secondNumber));
console.log("Division:", divideNumbers(firstNumber, secondNumber));
