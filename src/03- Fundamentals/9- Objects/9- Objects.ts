// // ===========================================================
// //                      Optional and Readonly Modifiers
// // ===========================================================
//
// let employee: {
//     readonly id: number;           // readonly modifier, ensures 'id' can't be modified
//     name?: string;                 // name is optional
//     retire: (date: Date) => void;  // retire function signature
// } = {
//     id: 1,
//     retire: (date: Date) => console.log(date),
// };
//
// employee.name = "Reacher";         // Optional property can be set
// employee.retire(new Date());      // Calling the retire function
// console.log(employee);            // Output the employee object
