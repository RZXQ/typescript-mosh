// ===========================================================
//                Dynamic Property Assignment
// Note:
// TypeScript doesn't allow adding properties dynamically as JavaScript does.
// To achieve similar functionality, we use an index signature.
// ===========================================================

// -----------------------------------------------------------------------
//              A. JavaScript Dynamic Property Addition
// -----------------------------------------------------------------------
// Example (for understanding; not used in TypeScript):
// let person = {};
// person.name = "a";
// console.log(person.name);

// -----------------------------------------------------------------------
//       B. TypeScript Dynamic Property Assignment via Index Signature
// -----------------------------------------------------------------------

class SeatAssignment {
  // Index signature: allows dynamic properties where keys and values are strings.
  [seatNumber: string]: string;
}

let seatAssignments = new SeatAssignment();

// Assign seat occupants using both bracket and dot notation.
seatAssignments["A1"] = "Reacher";
seatAssignments.A2 = "Mosh";

console.log(seatAssignments);
