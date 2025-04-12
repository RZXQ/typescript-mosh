// ===========================================================
//                Account Class Definition
// ===========================================================

class Account {
  id: number;
  owner: string;
  amount: number;

  constructor(id: number, owner: string, amount: number) {
    this.id = id;
    this.owner = owner;
    this.amount = amount;
  }

  deposit(depositAmount: number) {
    if (depositAmount <= 0) throw new Error("Invalid amount");
    this.amount += depositAmount;
  }
}

// ===========================================================
//                      Account Usage
// ===========================================================

const account = new Account(1, "Reacher", 0);
account.deposit(100);

console.log(account); // Display the account's current state
console.log(typeof account); // Check the type of the account instance
console.log(account instanceof Account); // Verify if bankAccount is an instance of Account

export = {};
