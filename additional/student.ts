class Student {
    studentName: string;
    studentRollNumber: number;
    studentCourse: string;

    constructor(studentName: string, studentRollNumber: number, studentCourse: string) {
        this.studentName = studentName;
        this.studentRollNumber = studentRollNumber;
        this.studentCourse = studentCourse;
    }

    displayStudentDetails(): void {
        console.log("Student Name:", this.studentName);
        console.log("Roll Number:", this.studentRollNumber);
        console.log("Course:", this.studentCourse);
    }
}

let firstStudent = new Student("Rahul", 101, "Computer Science");

firstStudent.displayStudentDetails();
