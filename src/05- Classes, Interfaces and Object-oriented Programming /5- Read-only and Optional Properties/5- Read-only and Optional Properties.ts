class Account {
  readonly id: number; // Read-Only
  owner: string;
  balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number, nickname?: string) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
    if (nickname !== undefined) this.nickname = nickname;
  }

  deposit(money: number): void {
    if (money <= 0) throw new Error("Invalid amount");
    this.balance += money;
  }
}

const account = new Account(1, "Reacher", 10);

// Attempt to modify readonly property (Uncomment to see error)
// account.id = 2;
// console.log(account);

console.log(account);

export = {};
