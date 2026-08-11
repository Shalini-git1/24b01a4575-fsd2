let start: number = 10;
let end: number = 50;

console.log(`Prime numbers between ${start} and ${end}:`);

for (let num = start; num <= end; num++) {
    if (num < 2) {
        continue;
    }

    let isPrime: boolean = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}
