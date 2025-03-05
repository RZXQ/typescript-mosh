// ===========================================================
//                      Abstract Shape Class
// ===========================================================
// Abstract class: cannot be instantiated directly; must be extended.
// Abstract methods can only exist within abstract classes.
abstract class Shape {
  constructor(public color: string) {}

  // Abstract method: must be implemented by subclasses.
  // Return type is annotated as void since it doesn’t return a value.
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
    super(color);
  }

  // Implementing the abstract render method.
  override render(): void {
    console.log("Rendering a circle");
  }
}

// ===========================================================
//                      Notes on Usage
// ===========================================================
// Note: Shape is abstract and not a "real thing" on its own—it’s like an "uncooked meal."
// It’s a blueprint that subclasses (like Circle) must complete by implementing render().
// Attempting to instantiate Shape directly will cause an error:
// let shape = new Shape("red");  // Error: Cannot create an instance of an abstract class
// shape.render();                // Would also be invalid
