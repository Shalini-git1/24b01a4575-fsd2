let originalText: string = "programming";
let uniqueText: string = "";

for (let letter of originalText) {
    if (!uniqueText.includes(letter)) {
        uniqueText += letter;
    }
}

console.log("Original String:", originalText);
console.log("String after removing duplicate characters:", uniqueText);