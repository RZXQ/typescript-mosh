// ===========================================================
//                   STAGE 3 DECORATORS EXPLAINED
// ===========================================================
// • Decorators are functions that modify or enhance classes and their members
// • They run at class definition time (when the class is created), not when instances are created
// • @Log is a decorator that adds logging functionality to methods without changing the original method code
// • Stage 3 decorators are the new official JavaScript standard (different from experimental decorators)

// ===========================================================
//                   DECORATOR FUNCTION PARAMETERS
// ===========================================================
// • target: The original method function that we want to enhance
//   - This is the actual `say` method function from the Person class
//   - We can call it later to execute the original method logic
// • context: Metadata about where the decorator is applied
//   - Contains info like method name, class name, whether it's static, etc.
//   - Type is ClassMethodDecoratorContext (TypeScript provides this type)
//   - We don't use it in this simple example, but it's available for more complex scenarios

function Log(target: any, context: ClassMethodDecoratorContext) {
  // ===========================================================
  //                   RETURNING A REPLACEMENT FUNCTION
  // ===========================================================
  // • The decorator must return a new function that will REPLACE the original method
  // • This new function will be called every time someone calls person.say()
  // • We can add our custom logic (logging) before/after calling the original method

  return function (this: any, ...args: any[]) {
    // ===========================================================
    //                   FUNCTION PARAMETERS EXPLAINED
    // ===========================================================
    // • this: The instance of the class (the `person` object when someone calls person.say())
    // • ...args: All arguments passed to the method (spread operator captures all parameters)
    //   - In our case, this will be ["Hello"] when we call person.say("Hello")
    //   - Using spread operator makes this work with any number of parameters

    console.log("Before"); // • Our custom logic BEFORE the original method

    // ===========================================================
    //                   CALLING THE ORIGINAL METHOD
    // ===========================================================
    // • target.call(this, ...args): Calls the original method with proper context
    // • target: The original `say` method function
    // • this: Ensures the original method runs with the correct object instance
    // • ...args: Passes all arguments to the original method
    // • We store the result in case the original method returns something

    const result = target.call(this, ...args);

    console.log("After"); // • Our custom logic AFTER the original method

    // ===========================================================
    //                   WHY RETURN THE RESULT?
    // ===========================================================
    // • If the original method returns a value, we need to return it too
    // • This ensures the decorator doesn't break the method's return behavior
    // • In our example, `say` doesn't return anything, but this makes the decorator reusable
    // • Example: if `say` returned "Message sent", our decorated version should also return "Message sent"

    return result;
  };
}

// ===========================================================
//                   WHY @Log HAS NO PARAMETERS?
// ===========================================================
// • @Log is the decorator being applied to the `say` method
// • TypeScript automatically calls Log(originalSayMethod, contextInfo) when it sees @Log
// • We don't pass parameters because this is a simple decorator
// • If we wanted parameters, we'd create a decorator factory like @Log("debug level")

class Person {
  @Log // • This tells TypeScript: "apply the Log decorator to the say method"
  say(message: string) {
    console.log("Person says " + message);
  }
}

// ===========================================================
//                   EXECUTION FLOW
// ===========================================================
// • When we create the class, TypeScript calls: Log(originalSayMethod, contextInfo)
// • Log returns a new function that replaces the original `say` method
// • When we call person.say("Hello"), we're actually calling our replacement function
// • Our replacement function logs "Before", calls the original method, then logs "After"

let person = new Person();
person.say("Hello");

// Output will be:
// Before
// Person says Hello
// After

export = {};
