// ===========================================================
//                      Union Type (String, null, undefined)
// Using union type to allow the function to accept string, null, or undefined.
// If the name is truthy (not null or undefined), we convert it to uppercase.
// ===========================================================

function greet(name: string | null | undefined): void {
  if (name) console.log(name.toUpperCase()); // Only calls toUpperCase if name is truthy
  console.log("Hola!"); // Greeting message
}

// ===========================================================
//                      Function Calls
// Demonstrating function calls with different values (null and undefined).
// ===========================================================

greet(null); // Does not call toUpperCase, just prints "Hola!"
greet(undefined); // Does not call toUpperCase, just prints "Hola!"

export = {};
