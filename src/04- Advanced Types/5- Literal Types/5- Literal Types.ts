// ===========================================================
//                      Literal (Exact, Specific) Types
// Literal types allow you to specify exact values. In this case,
// Quantity can only be 50 or 100, and Metric can only be "cm" or "inch".
// ===========================================================

type Quantity = 50 | 100;
type Metric = "cm" | "inch";

// ===========================================================
//                      Usage Example
// Defining variables with literal types, restricting their values.
// ===========================================================

let quantity: Quantity = 100;
let metric: Metric = "inch";

console.log(quantity, metric);
