class BankAccount {
    accountHolderName: string;
    accountBalance: number;

    constructor(accountHolderName: string, accountBalance: number) {
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }

    deposit(depositAmount: number): void {
        this.accountBalance += depositAmount;
        console.log("Amount Deposited:", depositAmount);
    }

    withdraw(withdrawAmount: number): void {
        if (withdrawAmount <= this.accountBalance) {
            this.accountBalance -= withdrawAmount;
            console.log("Amount Withdrawn:", withdrawAmount);
        } else {
            console.log("Insufficient Balance");
        }
    }

    displayBalance(): void {
        console.log("Account Holder:", this.accountHolderName);
        console.log("Current Balance:", this.accountBalance);
    }
}

let customerAccount = new BankAccount("Rahul", 5000);

customerAccount.deposit(2000);
customerAccount.withdraw(1500);
customerAccount.displayBalance();
