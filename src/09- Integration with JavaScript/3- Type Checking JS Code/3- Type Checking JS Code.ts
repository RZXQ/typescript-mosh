import { calculateTax } from "./tax";

console.log(calculateTax()); // Missing argument will be undefined, resulting in NaN (undefined * 0.3)
