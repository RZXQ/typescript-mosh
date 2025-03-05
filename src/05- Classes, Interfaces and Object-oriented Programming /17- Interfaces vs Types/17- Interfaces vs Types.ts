// // ===========================================================
// //                      Interfaces vs Types
// // ===========================================================
// // Note: Interfaces and type aliases are interchangeable for defining object shapes
//
// // Using Interface
// interface Person {
//   name: string;
// }
// let person1: Person = {
//   name: "Mosh",
// };
//
// // Using Type Alias
// type PersonType = {
//   name: string;
// };
// let person2: PersonType = {
//   name: "Mosh",
// };
//
// // ===========================================================
// //                      Class Implementation
// // ===========================================================
// // Note: Classes can implement both interfaces and types
// interface MyInterface {}
// type MyType = {};
// class MyCalendar1 implements MyInterface {}
// class MyCalendar2 implements MyType {}
//
// // Note: Using 'interface' is more conventional for class contracts with 'implements'
