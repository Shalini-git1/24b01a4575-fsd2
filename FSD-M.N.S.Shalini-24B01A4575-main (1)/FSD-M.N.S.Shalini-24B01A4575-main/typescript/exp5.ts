function calculateSalary(daysWorked: number, salaryPerDay: number): number {
    return daysWorked * salaryPerDay;
}
const calculateMonthlySalary = (daysWorked: number, salaryPerDay: number): number => {
    return daysWorked * salaryPerDay;
};
const getCompanyMessage = (company: string): string =>
    `Welcome to ${company}!`;
const workingDays = 25;
const dailySalary = 800;
const salary1 = calculateSalary(workingDays, dailySalary);
console.log(`Salary (Traditional Function): Rs.${salary1}`);
const salary2 = calculateMonthlySalary(workingDays, dailySalary);
console.log(`Salary (Arrow Function): Rs.${salary2}`);
console.log(getCompanyMessage("Tech Solutions"));
const square = (num: number): number => num * num;
console.log(`Square of 9: ${square(9)}`);
