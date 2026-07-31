class Employee {
    public employeeName: string;
    private employeeSalary: number;
    protected employeeDepartment: string;

    constructor(
        employeeName: string,
        employeeSalary: number,
        employeeDepartment: string
    ) {
        this.employeeName = employeeName;
        this.employeeSalary = employeeSalary;
        this.employeeDepartment = employeeDepartment;
    }

    public displayEmployeeDetails(): void {
        console.log("Employee Name:", this.employeeName);
        console.log("Employee Salary:", this.employeeSalary);
        console.log("Employee Department:", this.employeeDepartment);
    }
}

class Manager extends Employee {
    showDepartment(): void {
        console.log("Manager Department:", this.employeeDepartment);
    }
}

let employeeObject = new Employee("Rahul", 50000, "IT");

console.log("Employee Name:", employeeObject.employeeName);

// console.log(employeeObject.employeeSalary);      // Error: private member
// console.log(employeeObject.employeeDepartment);  // Error: protected member

employeeObject.displayEmployeeDetails();

let managerObject = new Manager("Amit", 70000, "HR");
managerObject.showDepartment();