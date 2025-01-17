// ===========================================================
//                        Avoid `any` Type
// ===========================================================

// 1. Avoid using `any` type as it disables type checking.
let level; // Type is implicit `any` here, which should be avoided.
level = 1;
level = "a";

// 2. Using `any` in function parameters removes type safety.
function render(document: any) {
  console.log(document);
}
