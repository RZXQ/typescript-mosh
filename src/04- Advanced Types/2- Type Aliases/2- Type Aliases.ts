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

// Scenario 1: Without export = {} or any export:
// If your TypeScript file doesn't have any import or export statements, it's considered a script, and all declarations inside the file (like types, variables, functions, or classes) would be moved to the global scope, making them globally available across the project.
//
// Scenario 2: With export = {}:
// Once you add any import/export statement, TypeScript treats your file as a module rather than a script.
// Modules have their own scope. Any declaration (type, class, variable, or function) that is NOT explicitly exported is visible only within its own module.
export = {};
