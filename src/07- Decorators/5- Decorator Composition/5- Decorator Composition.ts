// 1. Multiple decorators execute as sequential function calls (not nested)
// 2. Application order: bottom-to-top (@Component first, then @Pipe)
// 3. Factory functions (@Component) are called immediately during evaluation
function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}

function Component(value: number) {
  console.log("Component decorator called");
  return function (constructor: Function) {
    constructor.prototype.insertInDOM = () =>
      console.log("Inserting into the DOM");
    constructor.prototype.options = value;
  };
}

@Pipe
@Component(10)
class ProfileComponent {}

export = {};
