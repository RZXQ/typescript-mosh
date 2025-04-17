// =========================================================
//               Interfaces vs Types
// =========================================================
// Note: Interfaces and type aliases are interchangeable for defining object shapes

// Using Interface
interface Person {
  name: string;
}
let person1: Person = {
  name: "Mosh",
};

// Using Type Alias
type PersonType = {
  name: string;
};
let person2: PersonType = {
  name: "Mosh",
};

// =========================================================
//                 Class Implementation
// =========================================================
// Classes can implement both interfaces and types that describe object shapes
interface MyInterface {
  someMethod(): void;
}

type MyType = {
  someProperty: string;
};

// Correct: Class implements an interface
class MyCalendar1 implements MyInterface {
  someMethod(): void {
    console.log("Implementation of interface method");
  }
}

// Correct: Class implements a type (that defines an object shape)
class MyCalendar2 implements MyType {
  someProperty: string = "Implementation of type property";
}

// INCORRECT (Original error): Classes cannot extend types, only other classes
// class MyCalendar3 extends MyType {} // This would cause a TypeScript error

// CORRECT: Classes can extend other classes
class BaseCalendar {
  name: string = "Base Calendar";
}

class ExtendedCalendar extends BaseCalendar {
  // Inherits name property from BaseCalendar
  displayName(): void {
    console.log(this.name);
  }
}

// =========================================================
//              Key Rules to Remember
// =========================================================
// 1. Classes can implement both interfaces and types (that define object shapes)
// 2. Classes can only extend other classes, not interfaces or types
// 3. Using 'interface' is more conventional when defining contracts for classes
//    with the 'implements' keyword
// 4. Types are more flexible for complex type manipulations
//    (unions, intersections, etc.)

export = {};
