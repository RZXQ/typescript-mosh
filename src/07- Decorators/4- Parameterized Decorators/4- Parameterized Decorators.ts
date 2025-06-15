function Component(value: number) {
  return (constructor: Function) => {
    constructor.prototype.options = value;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () =>
      console.log("Inserting the component in the DOM");
  };
}

// Decorator Factory: A function that creates/manufactures decorator functions.
// Takes configuration parameters and returns a customized decorator.
// Follows the Factory Pattern - reusable and configurable.
@Component(10)
class ProfileComponent {}

export = {};
