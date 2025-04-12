// Is a Method Considered a Property?
//
//     Technically:
//
//     In JavaScript/TypeScript, methods are a type of property because they are stored as key-value pairs inside the object.
//     A method is a property whose value is a function.
// Example:
//

const person = {
  name: "Alice", // Property
  age: 30, // Property

  // Method
  talk: function () {
    console.log("Talking!");
  },
};

console.log(typeof person.name); // "string" -> Property
console.log(typeof person.talk); // "function" -> Method (but technically a property)

export = {};
