class Account {
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
  ) {}

  // ===========================================================
  //                      Accessors
  // ===========================================================

  // 1. Getter method (allows reading `_balance`)
  //    - Provides controlled access to the private `_balance` field.
  get balance(): number {
    return this._balance;
  }

  // 2. Setter method (allows updating `_balance` with validation)
  //    - Ensures `_balance` is not set to a negative value.
  set balance(value: number) {
    if (value < 0) throw new Error("Invalid value");
    this._balance = value;
  }
}

// ===========================================================
//                        Usage Example
// ===========================================================

const account = new Account(1, "Reacher", 0);

// 3. Setter enforces validation, so this will throw an error
account.balance = -100; // ❌ Throws: "Invalid value"

console.log(account);
