function greetUser(name: string): string {
    return `Hello, ${name}!`;
}
function getCity(city: string = "Hyderabad"): string {
    return `City: ${city}`;
}
function sendMessage(phone: string, message?: string): void {
    console.log(`Sending message to ${phone}...`);
    if (message) {
        console.log(`Message: ${message}`);
    }
}
function findTotal(...numbers: number[]): number {
    return numbers.reduce((sum, value) => sum + value, 0);
}
console.log(greetUser("Rahul"));
console.log(getCity());
console.log(getCity("Vijayawada"));
sendMessage("9876543210");
sendMessage("9876543210", "Meeting starts at 10 AM");
let total = findTotal(15, 25, 30, 20);
console.log(`Total Marks: ${total}`);
