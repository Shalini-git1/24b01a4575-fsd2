let data: any = 500;
data = "Welcome to TypeScript";
console.log("Current Value: " + data);
let input: any = true;

if (typeof input === "string") {
    console.log("String Length: " + input.length);
} else {
    console.log("Input is not a string");
}
function showNotification(text: string): void {
    console.log("Notification: " + text);
}
showNotification("Assignment Submitted Successfully!");
