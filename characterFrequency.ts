let inputText: string = "programming";
let frequencyMap: { [key: string]: number } = {};

for (let currentCharacter of inputText) {
    if (frequencyMap[currentCharacter]) {
        frequencyMap[currentCharacter]++;
    } else {
        frequencyMap[currentCharacter] = 1;
    }
}

console.log("Character Frequencies:");

for (let characterKey in frequencyMap) {
    console.log(characterKey + " : " + frequencyMap[characterKey]);
}