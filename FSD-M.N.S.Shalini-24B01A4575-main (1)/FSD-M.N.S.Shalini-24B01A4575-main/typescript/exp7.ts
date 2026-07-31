class LibraryMember {
    memberName: string;
    booksIssued: number;
    private memberId: number;
    bonusBooks: number = 0;
    constructor(name: string, issuedBooks: number, id: number) {
        this.memberName = name;
        this.booksIssued = issuedBooks;
        this.memberId = id;
    }
    issueBook(count: number, enteredId: number): void {
        if (this.verifyMember(enteredId)) {
            this.booksIssued += count;
            console.log(`${count} book(s) issued successfully.`);
            console.log(`Total Books Issued: ${this.booksIssued}`);
        } else {
            console.log("Invalid Member ID!");
        }
    }
    private verifyMember(id: number): boolean {
        return this.memberId === id;
    }
}
class PremiumMember extends LibraryMember {
    addBonusBooks(): void {
        this.bonusBooks += 2;
        console.log(`Bonus Books Available: ${this.bonusBooks}`);
    }
}
const member1 = new LibraryMember("Priya", 3, 2025);
console.log(`Member Name: ${member1.memberName}`);
member1.issueBook(2, 2025);
const premiumMember = new PremiumMember("Kiran", 5, 3030);
premiumMember.addBonusBooks();
