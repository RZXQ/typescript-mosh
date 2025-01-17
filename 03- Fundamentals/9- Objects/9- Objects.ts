// ===========================================================
//               Using Semicolons in Type Declarations
// ===========================================================
// let employee: { id: number; name: string }; // Using semicolons
// let employee: { id: number, name: string }; // Using commas
// Semicolons are commonly used in type declarations for readability and consistency.
// Commas are more natural in actual object literals or JavaScript structures.

// ===========================================================
//                 Using Readonly Modifier
// ===========================================================
let employee: {
  readonly id: number; // id is immutable
  name: string; // name is mutable
  retire: (date: Date) => void; // retire is a function accepting a Date
} = {
  id: 1,
  name: "Reacher",
  retire: (date: Date) => {
    console.log(date);
  },
};
