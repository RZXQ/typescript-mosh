// ===========================================================
//                   Union Type Constraint
// ===========================================================
function echo1<T extends number | string>(value: T): T {
  return value;
}
echo1(42); // Works: 42 is a subtype of number
echo1("hello"); // Works: "hello" is a subtype of string
// echo1(true);     // Error: boolean is not assignable to number | string

// ===========================================================
//                  Structural Constraint
// ===========================================================
function echo2<T extends { name: string }>(value: T): T {
  return value;
}
echo2({ name: "Alice" }); // Works: matches the required shape
echo2({ name: "Bob", age: 25 }); // Works: extra properties are fine
console.log(echo2({ name: "Ruizhi", age: 90 })); // { name: "Ruizhi", age: 90 }

// ===========================================================
//                  Interface Constraint
// ===========================================================
interface Person {
  name: string;
}
function echo3<T extends Person>(value: T): T {
  return value;
}
console.log(echo3({ name: "Ruizhi" })); // Works: { name: "Ruizhi" }

// - Structural typing in TypeScript means compatibility is based on the *shape* of an object (its properties and methods)
//   rather than an explicit declaration like `implements`. If an object has the required properties (e.g., `name: string` here)
//   with compatible types, it’s considered to satisfy the `Person` interface—no need to formally declare it implements it.
// - Think "duck typing": "If it walks like a duck and talks like a duck, it’s a duck." Here, any object with at least a `name`
//   property of type string satisfies `T extends Person`.
// - Extra properties don’t break compatibility; TypeScript only checks for the minimum required structure.
// - Example: `{ name: "Ruizhi", age: 25 }` would also work because it has `name: string`, even though `age` isn’t in `Person`.

// ===========================================================
//                    Class Constraint
// ===========================================================
class PersonClass {
  constructor(public name: string) {}
}
class Customer extends PersonClass {}
function echo4<T extends PersonClass>(value: T): T {
  return value;
}
echo4(new PersonClass("Ruizhi")); // Works: PersonClass itself
echo4(new Customer("Ruizhi")); // Works: Customer extends PersonClass

// ===========================================================
//              Key Points on `extends` in Generics
// ===========================================================
// - `extends` means “is assignable to” or “is a subtype of” the type on the right—not always class inheritance.
// - In `T extends number | string`: T must be assignable to the union, so T can be number, string, or a narrower type like 42.
// - In `T extends { name: string }`: T must be any type with at least a name: string property—focus is on structure.
// - In `T extends Person` (interface): T must match the shape of the Person interface.
// - In `T extends Person` (class): T must be the Person class or a subclass of it.
