let numbe: number = 29;
let isPrime: boolean = true;

if (numbe <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(numbe); i++) {
        if (numbe % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num + " is a Prime Number");
} else {
    console.log(num + " is Not a Prime Number");
}
