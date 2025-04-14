// ===========================================================
//                        Access Modifiers
// ===========================================================

// 1. Three Access Modifiers in TypeScript:
//    - public    → Accessible anywhere (default).
//    - private   → Accessible only within the class.
//    - protected → Accessible within the class and subclasses.

class Account {
  // Public properties (accessible from anywhere)
  id: number;
  owner: string;

  // 2. Private field (achieves encapsulation)
  private _balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  // Public method for depositing money
  // Call private method inside
  deposit(amount: number) {
    this.calculateTax();
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  // 3. Public accessor method to get balance
  getBalance(): number {
    return this._balance;
  }

  // 4. Private method
  private calculateTax() {}
}

// ===========================================================
//                        Usage Example
// ===========================================================

let account = new Account(1, "Reacher", 0);

// 4. TypeScript does not enforce true privacy
//    - Private fields can still be accessed (not truly private in JS).
//    - However, it's considered bad practice to do so.
account._balance = -1; // Direct access bypassing encapsulation

console.log(account);

export = {};
