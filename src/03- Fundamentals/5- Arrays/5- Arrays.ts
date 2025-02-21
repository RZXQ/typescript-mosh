// ===========================================================
//                     1. Type Inference
// ===========================================================

// TypeScript infers `numbers` as `number[]` based on the initial values.
let numbers = [1, 2, 3];

// ===========================================================
//              2. Avoid Implicit `any`
// ===========================================================

let arr = [];

// ===========================================================
//         3. Enhanced IntelliSense with TypeScript
// ===========================================================

// Another benefit of TypeScript: IntelliSense shows available methods for `n` as a `number`.
numbers.forEach((n) => n.toString());
