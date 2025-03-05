// // ===========================================================
// //                      KeyValuePair Class
// // ===========================================================
// class KeyValuePair {
//   constructor(
//     // Note: Using 'any' type disables IDE IntelliSense, reducing type safety
//     public key: number,
//     public value: string,
//   ) {}
// }
//
// // ===========================================================
// //                      StringKeyValuePair Class
// // ===========================================================
// class StringKeyValuePair {
//   constructor(
//     public key: string,
//     public value: string,
//   ) {}
// }
//
// // ===========================================================
// //                      Usage Example
// // ===========================================================
// let pair1 = new KeyValuePair(1, "Apple");
// let pair2 = new StringKeyValuePair("1", "Apple");
//
// // ===========================================================
// //                      Why Need Generics
// // ===========================================================
// // Note: Generics are needed to:
// // - Avoid code duplication (e.g., KeyValuePair and StringKeyValuePair are nearly identical but for key types).
// // - Provide flexibility for any key/value type (e.g., number, string, boolean, custom objects) without creating new classes.
// // - Ensure type safety and maintain IDE IntelliSense for each instance, unlike 'any' or union types.
// // - Scale easily as project needs grow, reducing maintenance overhead for similar classes.
