// ===========================================================
//                  1. Falsy Values in JavaScript
// ===========================================================
// - Falsy values: null, undefined, '', 0, false

let speed: number | null = null;

// ===========================================================
//       2. Traditional Way to Check Falsy Values
// ===========================================================
// - Checks null and undefined explicitly
// speed: speed !== null ? speed : 30;

// ===========================================================
//       3. TypeScript Way: Nullish Coalescing Operator (??)
// ===========================================================
// - If `speed` is not null or undefined, use that value
// - Otherwise, use the fallback value (30)

let ride = {
  speed: speed ?? 30,
};

console.log(ride); // { speed: 30 }
