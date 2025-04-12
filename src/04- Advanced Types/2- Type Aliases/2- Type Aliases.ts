// ===========================================================
//                      DRY Principle & Type Alias
// 1. DRY Principle: Avoid repetition
// 2. Type Alias: Defining 'Employee' type for better reusability
// ===========================================================

type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Reacher",
  retire: (date: Date) => console.log(date),
};

console.log(employee); // Output the employee object

export = {};
