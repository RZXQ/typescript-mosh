// ===========================================================
//                   Approach A: Using Old Syntax
// ===========================================================
// function calculateTax(income: number, taxYear: number): number {
//   if ((taxYear || 2022) < 2022) {
//     return income * 1.2;
//   }
//   return income * 1.3;
// }

// ===========================================================
//         Approach B: Using Default Parameters (Recommended)
// ===========================================================
function calculateTax(income: number, taxYear: number = 2022): number {
  // When no taxYear is provided, it defaults to 2022.
  // This approach avoids issues with falsy values and enhances code clarity.
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

console.log(calculateTax(100000));
