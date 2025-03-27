export = {};

// ===========================================================
//                        Avoid `any` Type
// Note: Avoid using the `any` type as it disables type checking,
// losing TypeScript's type safety.
// ===========================================================

let level; // Implicit `any` should be avoided.
level = 1;
level = "a";

// Using `any` in function parameters removes type safety.
function render(document: any) {
  console.log(document);
}
