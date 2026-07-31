let inputArray: number[] = [1, 2, 3, 2, 4, 5, 1, 6, 3];

let duplicateCount: { [key: number]: number } = {};
let duplicateElements: number[] = [];

for (let arrayItem of inputArray) {
    if (duplicateCount[arrayItem]) {
        duplicateCount[arrayItem]++;
    } else {
        duplicateCount[arrayItem] = 1;
    }
}

for (let duplicateKey in duplicateCount) {
    if (duplicateCount[duplicateKey] > 1) {
        duplicateElements.push(Number(duplicateKey));
    }
}

console.log("Duplicate Elements:", duplicateElements);