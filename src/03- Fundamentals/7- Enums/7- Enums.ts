export = {};

// ===========================================================
//         1. Using `const` and `const enum` for Efficiency
// - `const` variables cannot be reassigned, helping the compiler
//   optimize the code and ensuring immutability.
// - `const enum` in TypeScript is fully inlined at compile time,
//   making the resulting JavaScript smaller and more performant.
//   However, you lose the ability to reference the enum object
//   at runtime (no runtime reflection).
// ===========================================================
export {};

const small = 1;

const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);
