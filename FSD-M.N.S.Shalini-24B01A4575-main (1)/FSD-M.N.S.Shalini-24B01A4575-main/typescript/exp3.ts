let employeeName: string = "Anjali";
let employeeId: number = 102;
let isPermanent: boolean = true;
function employeeDetails(name: string, id: number): string {
    return `${name} has Employee ID ${id}`;
}
let departments: string[] = ["HR", "Finance", "Marketing", "IT"];
let details = employeeDetails(employeeName, employeeId);
console.log(details);
console.log("Permanent Employee: " + isPermanent);
console.log("Departments: " + departments.join(", "));
