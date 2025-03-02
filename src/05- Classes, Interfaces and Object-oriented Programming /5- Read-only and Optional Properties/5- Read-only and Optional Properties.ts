// ===========================================================
//                         Account Class
// ===========================================================

class Account {
  // 1. Readonly property
  readonly id: number;

  // 2. Optional property
  nickname?: string;

  // 3. Regular properties
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number, nickname?: string) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
    this.nickname = nickname;
  }

  deposit(money: number) {
    if (money <= 0) throw new Error("Invalid amount");
    this.balance += money;
  }
}

// ===========================================================
//                        Usage Example
// ===========================================================

const account = new Account(1, "Reacher", 0, "RUIZHI");

// Attempt to modify readonly property (Uncomment to see error)
// account.id = 2;

console.log(account);
