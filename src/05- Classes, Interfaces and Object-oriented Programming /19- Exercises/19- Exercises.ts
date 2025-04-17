// 1. Define a class called Logger that takes the name of a file in its constructor and provides a method for writing messages to that file. Don’t worry about the actual file I/O operations. Just define the class with the right members.
class Logger {
  constructor(public logFile: string) {}

  log(message: string) {}
}

// 2. Given the Person class below, create a getter for getting the full name of a person.
// class Person {
//     constructor(public firstName: string, public lastName: string) {}
// }
class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// 3. Create a new class called Employee that extends Person and adds a new property called salary.
class Employee extends Person {
  constructor(
    firstName: string,
    lastName: string,
    public salary: number,
  ) {
    super(firstName, lastName);
  }
}

// 4. What is the difference between private and protected members?
// Private members are not inherited by child classes.

// 5. Given the data below, define an interface for representing employees:
//
// let employee = {
//     name: 'John Smith',
//     salary: 50_000,
//     address: {
//         street: 'Flinders st',
//         city: 'Melbourne',
//         zipCode: 3144,
//     },
// };

interface Address {
  street: string;
  city: string;
  zipCode: string;
}
interface Employee {
  name: string;
  salary: number;
  address: Address;
}
// The main difference is that `type` can represent more kinds of types beyond just objects,
// while `interface` is specifically for defining object shapes.
//
// Types can represent:
// - Objects: type User = { name: string; age: number }
// - Primitives: type ID = string
// - Unions: type Status = 'pending' | 'approved' | 'rejected'
// - Intersections: type Admin = User & { permissions: string[] }
// - Tuples: type Point = [number, number]
// - Functions: type Callback = (err: Error | null, data: any) => void
// - Arrays: type Names = string[]
//
// Interfaces can only represent object shapes and are primarily used for:
// - Defining contracts for classes to implement
// - Describing the shape of objects
// - Can be extended by other interfaces
// - Can be merged when declared multiple times
//
// When to use interface:
// - When you need declaration merging
// - When defining a contract for classes with implements
// - When you want to extend other interfaces
//
// When to use type:
// - When you need unions, primitives, or tuples
// - When you need to use mapped types or conditional types
// - When you want to use complex type manipulations

export = {};
