// // ===========================================================
// //                      Person Class
// // ===========================================================
// class Person {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//   ) {}
//
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
//
//   walk() {
//     console.log("Walking");
//   }
// }
//
// // ===========================================================
// //                      Student Class (Inheritance)
// // ===========================================================
// class Student extends Person {
//   // Using access modifier in constructor auto-initializes properties (e.g., this.studentId = studentId)
//   constructor(
//     public studentId: number,
//     firstName: string,
//     lastName: string,
//   ) {
//     super(firstName, lastName);
//   }
//
//   takeTest() {
//     console.log("Taking a test");
//   }
// }
//
// // ===========================================================
// //                      Usage Example
// // ===========================================================
// let student = new Student(1, "Reacher", "email@email.com");
// console.log(student);
