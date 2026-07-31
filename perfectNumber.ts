let numb: number = 28;
let summ: number = 0;

// Find the sum of proper divisors
for (let i = 1; i <= numb / 2; i++) {
    if (numb % i === 0) {
        summ += i;
    }
}

// Check if the number is a perfect number
if (summ === numb) {
    console.log(num + " is a Perfect Number");
} else {
    console.log(num + " is Not a Perfect Number");
}