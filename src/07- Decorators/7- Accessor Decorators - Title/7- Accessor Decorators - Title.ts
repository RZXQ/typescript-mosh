function Capitalize(target: any, context: ClassGetterDecoratorContext) {
  const original = target;

  return function (this: any) {
    console.log(original);
    return original.call(this).toUpperCase();
  };
}

class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  @Capitalize
  get fullname() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullname(value: string) {
    [this.firstName, this.lastName] = value.split(" ");
  }
}

const person = new Person("Ruizhi", "Wang");
console.log(person.fullname);
