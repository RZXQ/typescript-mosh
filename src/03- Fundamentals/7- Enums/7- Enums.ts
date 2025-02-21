// ===========================================================
//            1. Using `const` for Optimized Code
// ===========================================================
// Using `const` can generate optimized code by preventing reassignment
// and ensuring that the value remains constant.

enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);
