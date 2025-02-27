// ===========================================================
//                           1. Unknown Type
// ===========================================================
// - `unknown` is safer than `any` because TypeScript enforces type checking before usage.
// - Use `unknown` when the exact type is not known at compile time.
// - Unlike `any`, TypeScript prevents calling arbitrary methods on `unknown` without type checks.

function render(document: unknown) {
  // ===========================================================
  //                      2. Type Narrowing
  // ===========================================================
  // - Before using `unknown`, we must first check its actual type.
  // - TypeScript requires explicit checks to ensure type safety.

  // ===========================================================
  //             3. typeof for Primitive Type Checking
  // ===========================================================
  // - `typeof` works for primitive types (string, number, boolean, etc.).
  if (typeof document === "string") {
    document.toUpperCase(); // ✅ Safe: `document` is confirmed to be a string
  }

  // ===========================================================
  //             4. instanceof for Reference Types
  // ===========================================================
  // - `instanceof` checks if an object is an instance of a specific class.
  if (document instanceof WordDocument) {
    document.save(); // ✅ Safe: `document` is confirmed to be a `WordDocument`
  }

  // ===========================================================
  //         5. Restrictions on the Unknown Type
  // ===========================================================
  // ❌ Error: Without type checks, TypeScript doesn't allow calling methods on `unknown`.

  document.move();
  document.fly();
  document.whateverwewant();
}
