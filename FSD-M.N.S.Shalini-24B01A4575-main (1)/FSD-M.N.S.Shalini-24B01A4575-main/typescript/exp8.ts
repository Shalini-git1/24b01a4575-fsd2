class Employee {
    public static readonly companyName: string = "Tech Solutions Pvt Ltd";
    public static totalEmployees: number = 0;
    public readonly employeeId: string;
    public employeeName: string;
    constructor(name: string, id: string) {
        this.employeeName = name;
        this.employeeId = id;
        Employee.totalEmployees++;
    }
    public static displayCompanyInfo(): void {
        console.log(`Company: ${Employee.companyName}`);
    }
    public displayEmployee(): void {
        console.log(`Employee Name: ${this.employeeName}`);
        console.log(`Employee ID: ${this.employeeId}`);
    }
}
Employee.displayCompanyInfo();
const e1 = new Employee("Kiran", "EMP101");
const e2 = new Employee("Priya", "EMP102");
const e3 = new Employee("Arjun", "EMP103");
e1.displayEmployee();
e2.displayEmployee();
e3.displayEmployee();
console.log(`Total Employees: ${Employee.totalEmployees}`);
