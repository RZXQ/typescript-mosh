// ===========================================================
//              JavaScript vs TypeScript Types
// ===========================================================
// |   JavaScript Types   |   TypeScript Types               |
// |-----------------------|----------------------------------|
// | number               | unknown                          |
// | string               | any                              |
// | boolean              | never                            |
// | null                 | enum                             |
// | undefined            | tuple                            |
// | object               |                                  |
// ===========================================================

// TypeScript infers variable types based on the assigned value.
// You typically do not need annotations for variables initialized immediately.

// Use explicit type annotations when:
// 1. A variable is declared without initialization:
//    let totalSales: number;
//    totalSales = 1000;
//
// 2. Variable types are ambiguous or involve union types:
//    let id: number | string;
//    id = "123abc";
//
// 3. Specifying function parameters and return types for clarity:
//    function calculateTax(income: number, taxRate: number): number {}
//
// 4. Defining structured data explicitly using interfaces/types:
//    interface Course {
//      title: string;
//      students: number;
//    }
//    let myCourse: Course = { title: "TypeScript", students: 200 };

let totalSales = 123_456_789; // inferred as number
let courseName = "TypeScript"; // inferred as string
let isPublished: boolean = true; // explicit boolean annotation (optional here)
