// ===========================================================
//                  1. Optional Property Access (?.)
// ===========================================================

type Customer = { birthday?: Date };

function getCustomer(id: number): Customer | null | undefined {
  if (id === 0) return null;
  if (id === 1) return undefined;
  return { birthday: new Date() };
}

const customer = getCustomer(0);

// Ensures access only when `customer` is neither null nor undefined
console.log(customer?.birthday); // undefined
console.log(customer?.birthday?.getFullYear()); // undefined

// ===========================================================
//                  2. Optional Element Access (?.[])
// ===========================================================

const customers = [getCustomer(0), getCustomer(1), getCustomer(2)];

// Safely accesses array elements to prevent runtime errors
console.log(customers[0]?.birthday?.getFullYear()); // undefined

// ===========================================================
//                  3. Optional Call Access (?.())
// ===========================================================

let log: any = (message: string): void => console.log(message);

// let log: any = null;  // Uncomment to test safety
log?.("a"); // "a" (only executes if `log` is callable)
