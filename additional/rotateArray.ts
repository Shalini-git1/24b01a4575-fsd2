let sourceArray: number[] = [1, 2, 3, 4, 5];
let rotateBy: number = 2;

// Ensure rotation value is within array length
rotateBy = rotateBy % sourceArray.length;

// Rotate the array to the left
let rotatedResult: number[] = [
    ...sourceArray.slice(rotateBy),
    ...sourceArray.slice(0, rotateBy)
];

console.log("Original Array:", sourceArray);
console.log("Rotated Array:", rotatedResult);
