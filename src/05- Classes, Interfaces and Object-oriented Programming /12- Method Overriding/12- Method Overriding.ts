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
// //                      Student Class
// // ===========================================================
// class Student extends Person {
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
// //                      Teacher Class
// // ===========================================================
// class Teacher extends Person {
//   // Note: No constructor needed; inherits Person's constructor automatically
//   // Unlike Java, TypeScript doesn't require explicit super() unless you define a new constructor
//
//   // Note: 'override' is optional but recommended; it ensures the getter exists in Person
//   override get fullName() {
//     return "Professor: " + super.fullName;
//   }
// }
//
// // ===========================================================
// //                      Usage Example
// // ===========================================================
// const teacher = new Teacher("Ruizhi", "Wang");
// console.log(teacher.fullName); // Outputs: "Professor: Ruizhi Wang"
