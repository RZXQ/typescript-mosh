// // ===========================================================
// //                  1. Tuple Definition
// // Tuples are fixed-length arrays, particularly useful for
// // strictly typed value sequences like key-value pairs.
// // Best Practice: Always restrict tuples to SPECIFIC types
// // and PREDEFINED lengths.
// // ===========================================================
// let user: [number, string] = [1, "Reacher"];
// console.log(typeof user); // "object" – JS underlying type is an array
//
// // ===========================================================
// //                  2. Array vs Tuple Comparison
// // Arrays and tuples have similar underlying structures but
// // distinct type-checking behaviors:
// // - Arrays: dynamic size with flexible element types.
// // - Tuples: fixed size and strictly typed, element-by-element.
// // ===========================================================
//
// // Example array: dynamic length and flexibility
// const dynamicLengthArray: (number | string)[] = [1, "Hello"];
// // - Any number of elements can be added or removed.
// // - Types within the allowed union are interchangeable and can be reordered freely.
//
// // Example tuple: strict fixed length and types per specific position
// const fixedLengthTuple: [number, string] = [1, "Hello"];
// // - Strictly enforces a fixed length (exactly two elements).
// // - Element types must match exactly the order and defined type (number first, string second).
//
// // ===========================================================
// //               3. Tuple Push Method Paradox
// // The `push` method can ADD elements despite the tuple’s fixed-length
// // definition—this leads to potential runtime issues since TypeScript
// // currently doesn't prevent mutation methods like `push`.
// // ===========================================================
// user.push(1); // No compiler warning or error
// console.log(user); // Outputs: [1, "Reacher", 1] - length unexpectedly changed!
//
// // ===========================================================
// //             4. Type Safety Workaround (Optional)
// // To enforce immutability and prevent accidental mutations at
// // compile-time, use the `readonly` modifier explicitly.
// // ===========================================================
// const safeUser: readonly [number, string] = [2, "Finley"];
// // safeUser.push(3);  // Compile-time error now - mutation prevented
