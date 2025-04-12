// 1. Given the data below, define a type alias for representing users.
// let users = [
//   {
//     name: "John Smith",
//     age: 30,
//     occupation: "Software engineer",
//   },
//   {
//     name: "Kate Müller",
//     age: 28,
//   },
// ];
type User = {
  name: string;
  age: number;
  occupation?: string;
};

// 2. Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these.
type Bird = { fly: () => void };
type Fish = { swim: () => void };
type Pet = Bird | Fish;

const a: Pet = {
  fly: () => console.log(),
};

// 3. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

// 4. Simplify the following code snippets:
// let user = getUser();
// console.log(user && user.address ? user.address.street : undefined);
let user = getUser();
console.log(user?.address?.street);

// let x = foo !== null && foo !== undefined ? foo : bar();
let x = foo ?? bar();
// 5. What is the problem in this piece of code?
// let value: unknown = 'a';
// console.log(value.toUpperCase());
let value: unknown = "a";
if (typeof value === "string") console.log(value.toUpperCase());

export = {};
