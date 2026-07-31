class CollegeStudent {
    static collegeName: string = "ABC Engineering College";

    studentName: string;
    registerNumber: number;

    constructor(studentName: string, registerNumber: number) {
        this.studentName = studentName;
        this.registerNumber = registerNumber;
    }

    displayStudentData(): void {
        console.log("Student Name:", this.studentName);
        console.log("Register Number:", this.registerNumber);
    }

    static displayCollegeName(): void {
        console.log("College Name:", CollegeStudent.collegeName);
    }
}

let firstRecord = new CollegeStudent("Rahul", 101);
let secondRecord = new CollegeStudent("Anjali", 102);

firstRecord.displayStudentData();
secondRecord.displayStudentData();

CollegeStudent.displayCollegeName();