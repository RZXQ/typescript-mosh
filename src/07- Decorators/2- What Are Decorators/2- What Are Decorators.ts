// Decorators: Special functions that can modify classes, methods, properties, and parameters
// They're NOT magic - just clever JavaScript tricks!

// IMPORTANT: MyDecorator is a FUNCTION, not a class!
// Decorators are always functions that get called

// How decorators REALLY work (behind the scenes):
// 1. When TypeScript sees @MyDecorator, it's just syntactic sugar (fancy syntax)
// 2. TypeScript transforms your code during compilation
// 3. @MyDecorator above a class becomes: MyDecorator(YourClass)
// 4. The decorator FUNCTION gets called with specific parameters about what it's decorating

// What TypeScript does behind the scenes:
// Original code:     @MyDecorator        <- MyDecorator is a FUNCTION here
//                    class MyClass {}
//
// Gets transformed to: MyClass = MyDecorator(MyClass) || MyClass;
//                                 ^^^^^^^^^^^
//                                 This is a function call!

// Example of what MyDecorator function looks like:
// function MyDecorator(constructor: any) {
//     console.log('Decorating class:', constructor.name);
//     return constructor; // return the class (possibly modified)
// }

// The "magic" parameters decorators receive:
// - Class decorators: get the constructor function of the class being decorated
// - Method decorators: get the target object, method name, and property descriptor
// - Property decorators: get the target object and property name
// - Parameter decorators: get the target object, method name, and parameter index

// Why it feels like magic:
// - The @ syntax hides the function call
// - They run automatically when classes are defined
// - They can completely change how your code behaves
// - But underneath, it's just JavaScript functions being called at the right time!

// So remember: @MyDecorator means "call the MyDecorator FUNCTION"
