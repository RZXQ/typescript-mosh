// ===========================================================
//                      Abstract Shape Class
// ===========================================================
// Abstract class: cannot be instantiated directly; must be extended.
// Abstract methods can only exist within abstract classes.
abstract class Shape {
  // Protected constructor: restricts instantiation to child classes only
  // This means Shape can't be created with 'new Shape()' from outside the class hierarchy
  // But subclasses can call this constructor using super()
  protected constructor(public color: string) {}

  // Abstract method: must be implemented by subclasses.
  // 'abstract' requires subclasses to provide their own implementation
  // Being abstract means it has no implementation here, just the signature
  // Return type is annotated as void since it doesn't return a value.
  abstract render(): void;
}

// ===========================================================
//                      Circle Class
// ===========================================================
class Circle extends Shape {
  constructor(
    public radius: number,
    color: string,
  ) {
    // Calls the protected constructor of the parent class
    // This is allowed because Circle is a subclass of Shape
    super(color);
  }

  // Implementing the abstract render method.
  // This is required because Shape declared it as abstract
  // The access modifier (public by default) must be the same or less restrictive
  // than the parent class method's access level
  override render(): void {
    console.log("Rendering a circle");
  }
}

// ===========================================================
//                      Notes on Usage
// ===========================================================
// Two concepts restrict Shape instantiation:
// 1. Being abstract - abstract classes can never be directly instantiated
// 2. Having a protected constructor - even if not abstract, this would prevent
//    direct instantiation from outside the class hierarchy

// Difference between abstract and protected:
// - abstract: forces subclasses to implement specific methods
// - protected: restricts visibility to the class and its subclasses

// Valid usage:
const circle = new Circle(5, "red");
circle.render(); // Works, and calls Circle's implementation

// Invalid usages:
// const shape = new Shape("red");
// Error: Cannot create an instance of abstract class
// Error: Constructor of class 'Shape' is protected and only accessible within the class declaration

export = {};
