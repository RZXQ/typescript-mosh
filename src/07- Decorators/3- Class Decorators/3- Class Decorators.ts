// DECORATOR FUNDAMENTALS:
// 1. Decorators only work with classes and class members in TypeScript
// 2. You can't use @decorator syntax on regular functions
// 3. React uses functional components now, so decorators are rarely seen in React
// 4. React uses Higher-Order Components (HOCs) instead of decorators

// WHEN DECORATORS RUN:
// Decorators execute immediately when the class is DEFINED (not when instantiated)
// This happens at "class definition time" - before any instances are created
function Component(constructor: Function) {
  console.log("Component decorator is called"); // ← This runs RIGHT NOW when class is defined

  // Add properties to the class prototype (all instances will have these)
  constructor.prototype.uniqueId = Date.now();

  constructor.prototype.insertInDOM = function () {
    console.log("Inserting the component in the DOM");
  };
}

// The decorator runs immediately when this line is processed
@Component // ← "Component decorator is called" prints HERE, before any instances exist
class ProfileComponent {}

console.log("AFTER");

export = {};
