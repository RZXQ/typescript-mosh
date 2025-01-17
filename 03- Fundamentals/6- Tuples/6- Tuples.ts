// ===========================================================
//                  1. Tuple Definition
// ===========================================================
// Tuples are fixed-length arrays.
// Best practice: restrict tuples to specific types and lengths.

let user: [number, string] = [1, "Reacher"];
console.log(typeof user);

// ===========================================================
//                2. Tuple Push Method Bug
// ===========================================================
// The `push` method allows adding elements to a tuple without compiler errors.
// This breaks the fixed-length constraint of tuples.

user.push(1);
console.log(user);
