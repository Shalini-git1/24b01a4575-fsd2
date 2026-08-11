let numberArray: number[] = [12, 45, 7, 89, 34, 89, 56];

let highestValue: number = -Infinity;
let nextHighestValue: number = -Infinity;

for (let currentValue of numberArray) {
    if (currentValue > highestValue) {
        nextHighestValue = highestValue;
        highestValue = currentValue;
    } else if (currentValue > nextHighestValue && currentValue !== highestValue) {
        nextHighestValue = currentValue;
    }
}

if (nextHighestValue === -Infinity) {
    console.log("Second largest element does not exist.");
} else {
    console.log("Second Largest Element =", nextHighestValue);
}
