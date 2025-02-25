// ===========================================================
//                      Union Type: using |
// 1. Narrowing: Handling union types
// When narrowing, only methods common to both number and string are shown.
// If the type is 'number', it will multiply by 2.2 to convert kg to lbs.

// 2. parseInt: string => int
// Note: How parseInt() works:
// parseInt() parses the string from the beginning and stops once it encounters
// a non-numeric character. In "10kb", it will parse 10 and ignore "kb".
// ===========================================================

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;

  return parseInt(weight) * 2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
