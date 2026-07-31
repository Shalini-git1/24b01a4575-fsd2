class Student {
    name: string;
    rollNo: number;
    branch: string;
    section: string;
    constructor(name: string, rollNo: number, branch?: string, section?: string) {
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch ?? "CSE";
        this.section = section ?? "A";
    }
    displayDetails(): void {
        console.log("----- Student Details -----");
        console.log(`Name: ${this.name}`);
        console.log(`Roll No: ${this.rollNo}`);
        console.log(`Branch: ${this.branch}`);
        console.log(`Section: ${this.section}`);
    }
}
const s1 = new Student("Rahul", 101);
const s2 = new Student("Sneha", 102, "ECE", "B");
const s3 = new Student("Arjun", 103, "IT", "C");
s1.displayDetails();
s2.displayDetails();
s3.displayDetails();
