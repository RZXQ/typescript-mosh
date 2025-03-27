// ===========================================================
//                     1. Type Inference
// ===========================================================
// TypeScript automatically infers types from initial values.
// Here, `numbers` is implicitly typed as `number[]` because it's initialized with numeric values.
let numbers = [1, 2, 3];

// ===========================================================
//              2. Avoid Implicit `any`
// ===========================================================
// Declaring an empty array without explicit annotation causes TypeScript
// to infer it as `any[]`, meaning it can hold any type of data.
// This reduces type safety and clarity.
let arr = [];
arr[0] = 1; // allowed, but reduces type safety
arr[1] = "Hello"; // allowed, but reduces type safety
// Best Practice: Annotate explicitly whenever array types are ambiguous
// Example:
// let arr: (number | string)[] = [];

// ===========================================================
//         3. Enhanced IntelliSense with TypeScript
// ===========================================================
// Another benefit of clear TypeScript types is improved IntelliSense,
// providing precise code completion and method suggestions.
// Here, IntelliSense accurately identifies `n` as a `number`,
// allowing consistent and relevant method completion.
numbers.forEach((n) => n.toPrecision(3));

export = {};
