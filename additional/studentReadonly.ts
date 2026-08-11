class Student1 {
    readonly studentId: number;
    studentFullName: string;
    enrolledCourse: string;

    constructor(
        studentId: number,
        studentFullName: string,
        enrolledCourse: string
    ) {
        this.studentId = studentId;
        this.studentFullName = studentFullName;
        this.enrolledCourse = enrolledCourse;
    }

    displayStudentInformation(): void {
        console.log("Student ID:", this.studentId);
        console.log("Student Name:", this.studentFullName);
        console.log("Course:", this.enrolledCourse);
    }
}

let studentRecord = new Student1(101, "Rahul", "Computer Science");

studentRecord.displayStudentInformation();

// studentRecord.studentId = 102;
// Error: Cannot assign to 'studentId' because it is a readonly property.
