let num1: number = 24;
let num2: number = 36;

let a: number = num1;
let b: number = num2;

// Find GCD using Euclidean Algorithm
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}

let gcd: number = a;

// Find LCM
let lcm: number = (num1 * num2) / gcd;

console.log("GCD =", gcd);
console.log("LCM =", lcm);