// ===========================================================
//                      Person Class
// ===========================================================
class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log("Walking");
  }
}

// ===========================================================
//                      Student Class
// ===========================================================
class Student extends Person {
  constructor(
    public studentId: number,
    firstName: string,
    lastName: string,
  ) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

// ===========================================================
//                      Teacher Class
// ===========================================================
class Teacher extends Person {
  override get fullName() {
    return `Professor ${super.fullName}`;
  }
}

// ===========================================================
//                      Principal Class
// ===========================================================
class Principal extends Person {
  override get fullName() {
    return `Principal: ${super.fullName}`;
  }
}

// ===========================================================
//                      Utility Function
// ===========================================================
function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

// ===========================================================
//                      Polymorphism Demo
// ===========================================================
// Note: Polymorphism shown by calling fullName on Person array with different subclass instances
printNames([
  new Student(1, "John", "Smith"),
  new Teacher("Reacher", "Wang"),
  new Principal("Mary", "Smith"),
]);

export = {};
