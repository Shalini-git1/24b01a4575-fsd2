let elementArray: number[] = [1, 2, 3, 2, 4, 1, 5, 3, 2];

let occurrenceMap: { [key: number]: number } = {};

for (let elementValue of elementArray) {
    if (occurrenceMap[elementValue]) {
        occurrenceMap[elementValue]++;
    } else {
        occurrenceMap[elementValue] = 1;
    }
}

console.log("Occurrences of Each Element:");

for (let elementKey in occurrenceMap) {
    console.log(elementKey + " : " + occurrenceMap[elementKey]);
}