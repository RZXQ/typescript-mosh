/*
 Parameter Properties:

 The term "Parameter Property" specifically refers to a constructor parameter in
 TypeScript that automatically becomes a class property.

 In simple terms, Parameter Properties are:
   - Initially constructor parameters.
   - Automatically converted into class properties by adding modifiers.

 This TypeScript feature allows you to create and initialize class properties by simply
 placing modifiers directly before parameters in the constructor.

 Two types of modifiers are permitted with parameter properties:

 1. Access modifiers:
    - public
    - private
    - protected

 2. Property modifier:
    - readonly

 Important rule:
 Placing any of these modifiers (public, private, protected, or readonly) before a
 constructor parameter automatically turns it into a class property initialized
 directly with the parameter's value.

 Example:
 The parameter "readonly id: number" is implicitly public and equivalent to explicitly
 writing "public readonly id: number".
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
