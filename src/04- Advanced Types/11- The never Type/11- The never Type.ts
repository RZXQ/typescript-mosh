// ===========================================================
//                        1. Never Type
// ===========================================================
// - `never` means a function never successfully finishes executing.
// - Used when a function either runs forever (infinite loop) or always throws an error.
// - Helps TypeScript detect unreachable code and enforce strict type safety.

// ===========================================================
//            2. Example A: Infinite Loop Function
// ===========================================================
// - `processEvents` runs forever and never returns, so its type is `never`.

function processEvents(): never {
  while (true) {
    // Read message from a queue (loop never exits)
  }
}

processEvents();
console.log("Hello World"); // ❌ Unreachable code (never executed)

// ===========================================================
//            3. Example B: Function That Always Throws
// ===========================================================
// - `reject` always throws an error, preventing any return value.

function reject(message: string): never {
  throw new Error(message);
}

reject("...");
console.log("Hello World"); // ❌ Unreachable code (never executed)
