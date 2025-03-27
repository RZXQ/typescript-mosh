// ===========================================================
//              Optional and Readonly Modifiers
// ===========================================================

// Define an interface for the Employee type
interface Employee {
  readonly id: number; // readonly modifier: 'id' cannot be modified after initialization
  name?: string; // Optional property: 'name' can be omitted
  retire: (date: Date) => void; // Function signature: takes a Date and returns void
}

// Create an employee object that adheres to the Employee interface
const employee: Employee = {
  id: 1,
  retire: (date) => console.log(date), // No need to specify `date: Date` due to contextual typing
};

employee.name = "Reacher";
employee.retire(new Date());
console.log(employee);

export {};
