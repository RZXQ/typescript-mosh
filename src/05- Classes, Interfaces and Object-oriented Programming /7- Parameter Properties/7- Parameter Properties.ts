// ===========================================================
//                  Constructor Parameter Properties
// ===========================================================

// 1. TypeScript allows defining properties directly in the constructor.
//    - Instead of declaring properties separately, we add access modifiers in the constructor parameters.
//    - This eliminates redundancy while keeping the code cleaner and more readable.

class Account {
  // Optional property (not initialized in the constructor)
  nickname?: string;

  constructor(
    public readonly id: number, // Readonly property (cannot be reassigned after initialization)
    public owner: string, // Public property (accessible from anywhere)
    private _balance: number, // Private property (encapsulated within the class)
    nickname?: string, // Optional parameter (assigned manually inside constructor)
  ) {
    this.nickname = nickname; // Explicit assignment for optional property
  }

  // ===========================================================
  //                      Methods
  // ===========================================================

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }
}

// ===========================================================
//                        Usage Example
// ===========================================================

const account = new Account(1, "Reacher", 0, "R");

console.log(account);
