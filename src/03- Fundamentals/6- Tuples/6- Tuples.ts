// // ===========================================================
// //                  1. Tuple Definition
// // Tuples are fixed-length arrays. Particularly useful for
// // strict value pairs like key-value combinations.
// // Best practice: Always restrict tuples to SPECIFIC types
// // and PREDEFINED lengths.
// // ===========================================================
// let user: [number, string] = [1, "Reacher"];
// console.log(typeof user);  // "object" - JS array underneath
//
// // ===========================================================
// //                2. Tuple Push Method Paradox
// // The `push` method can ADD elements despite tuple's fixed-length
// // nature. No compile errors, but VIOLATES type safety at runtime.
// // ===========================================================
// user.push(1);  // No compiler warning
// console.log(user);  // [1, "Reacher", 1] - Length changed!
//
// // ===========================================================
// //             3. Type Safety Workaround (Optional)
// // Use `readonly` modifier to prevent array mutation methods
// // ===========================================================
// const safeUser: readonly [number, string] = [2, "Finley"];
// // safeUser.push(3);  // Compile-time error now
