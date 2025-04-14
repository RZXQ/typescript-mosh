// ===========================================================
//            Why Is It Called an "Index Signature"?
//
// An "Index Signature" explicitly tells TypeScript what type of properties
// an object can have, allowing dynamic creation and access of properties.
// "Index" refers to accessing object properties using keys within brackets,
// and "signature" specifies the allowed types of these keys and their values.
// ===========================================================
//                Dynamic Property Assignment
//
// Clarification:
// TypeScript typically requires properties to be explicitly defined.
// However, being a superset of JavaScript, TypeScript can also allow
// dynamic properties via an "Index Signature".
// ===========================================================

// -----------------------------------------------------------------------
//              A. JavaScript Dynamic Property Addition
// -----------------------------------------------------------------------
// Example (for information only; demonstrates JavaScript behavior):
// let person = {};
// person.name = "a";
// console.log(person.name); // Output: "a"

// -----------------------------------------------------------------------
//     B. TypeScript Dynamic Property Assignment with Index Signature
// -----------------------------------------------------------------------

class SeatAssignment {
  // "Index Signature":
  // Allows defining dynamic properties explicitly.
  // Keys and values are both explicitly typed as strings.
  [seatNumber: string]: string;
}

let seatAssignment = new SeatAssignment();

// Assign seat occupants using both bracket- and dot-notation.
seatAssignment["A1"] = "Reacher";
seatAssignment.A2 = "Mosh";

console.log(seatAssignment);

export = {};
