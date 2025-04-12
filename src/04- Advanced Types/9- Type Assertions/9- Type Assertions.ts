// ===========================================================
//                  1. Type Assertion (as Keyword)
// ===========================================================
// - `HTMLElement` is the base class for all HTML elements in JavaScript.
// - `HTMLInputElement` is a subclass of `HTMLElement`, specifically for <input> elements.
// - `getElementById("phone")` returns `HTMLElement | null` because TypeScript doesn't know the exact element type.
// - Since we know it's an `<input>`, we use Type Assertion (`as HTMLInputElement`) to specify its type.
// - This is similar to downcasting (polymorphism) in object-oriented programming.
// - Caution: If the element is not an `<input>`, using `as HTMLInputElement` will cause a runtime error.
// There is no type converting when using as XXX(type assertion), not narrowing it to another type

let phone = document.getElementById("phone") as HTMLInputElement;

console.log(phone.value); // Accessing the `value` property, which exists only on `HTMLInputElement`

export = {};
