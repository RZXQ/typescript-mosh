// allowJs: true in tsconfig.json enables importing JavaScript files in TypeScript
import { calculateTax } from "./tax";

let tax = calculateTax(10);
console.log(tax);
