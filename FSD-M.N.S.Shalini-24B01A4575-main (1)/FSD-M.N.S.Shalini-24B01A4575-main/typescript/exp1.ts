let employeeName: string = "Arun";
let employeeId: number = 105;
let isWorking: boolean = false;
console.log(typeof employeeName);
console.log(typeof employeeId);
console.log(typeof isWorking);
function printEmployee(name: string, id: number, status: boolean): void {
    console.log("Employee: " + name);
    console.log("ID: " + id);
    console.log("Working Status: " + (status ? "Working" : "Not Working"));
}
printEmployee(employeeName, employeeId, isWorking);
