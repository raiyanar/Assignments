// Build a Bank Account Management Program
class BankAccount {
  constructor(balance = 0) {
    this.transactions = [];
    this.balance = balance;
    // Each transaction stored in the transactions array should be an object with two properties: type and amount. The type property should be either deposit or withdraw, and the amount property should be the amount deposited or withdrawn.
  }
  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: "deposit", amount: amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: "withdraw", amount: amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }
  }
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    let deposits = [];
    this.transactions.forEach((transaction) => {
      if (transaction.type === "deposit") {
        deposits.push(transaction.amount);
      }
    });
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    let withdrawals = [];
    this.transactions.forEach((transaction) => {
      if (transaction.type === "withdraw") {
        withdrawals.push(transaction.amount);
      }
    });
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

const myAccount = new BankAccount();

myAccount.deposit(500);
myAccount.deposit(500);
myAccount.deposit(500);
myAccount.withdraw(700);
myAccount.withdraw(600);
