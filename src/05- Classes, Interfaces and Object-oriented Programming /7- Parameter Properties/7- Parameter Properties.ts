/*
 Parameter Properties:

 "Parameter Properties" is a TypeScript feature allowing automatic creation and
 initialization of class properties by adding modifiers directly inside the constructor.

 You can use two types of modifiers with parameter properties:

 1. Access modifiers:
    - public
    - private
    - protected

 2. Property modifier:
    - readonly

 Important rule:
 Adding any of these modifiers (public, private, protected, or readonly) before a
 constructor parameter automatically converts it into a class property initialized
 with the parameter's value.

 Example:
 - "readonly id: number" is equivalent to "public readonly id: number".
*/
class Account {
  constructor(
    readonly id: number, // equivalent to public readonly id: number
    public owner: string,
    private _balance: number,
    public nickname?: string,
  ) {}
}

const account = new Account(10, "ruizhi", 100, "Reacher");
console.log(account);

export = {};
