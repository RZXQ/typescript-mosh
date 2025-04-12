// ===========================================================
//                  1. Falsy Values in JavaScript
// ===========================================================
// Falsy values: 0 -0 0n NaN '' false null undefined
//
// ===========================================================
//       2. Traditional Way to Check Falsy Values
// ===========================================================
// Approach 1: using the || to check :
// let ride = {
//    speed: speed || 30; // but this would ignore the falsy value like 0
// }
//
// Approach 2:
// - Checks null and undefined explicitly
// speed !== null && speed !== undefined ? speed : 30;
//
// ===========================================================
//       3. TypeScript Way: Nullish Coalescing Operator (??)
// ===========================================================
// - If `speed` is not null or undefined, use that value
// - Otherwise, use the fallback value (30)

let speed: number | null = null;

let ride = {
  speed: speed ?? 30,
};

console.log(ride); // { speed: 30 }

export = {};
