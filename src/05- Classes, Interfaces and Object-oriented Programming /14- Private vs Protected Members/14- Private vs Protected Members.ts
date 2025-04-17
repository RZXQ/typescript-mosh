// ===========================================================
//                      Person Class
// ===========================================================
class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  // Note: Protected method; prefer public/private to reduce coupling
  protected walk() {
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
    this.walk(); // Accessing protected method from parent
    console.log("Taking a test");
  }
}

// ===========================================================
//                      Teacher Class
// ===========================================================
class Teacher extends Person {
  override get fullName() {
    return `Professor: ${super.fullName}`;
  }
}

export = {};
