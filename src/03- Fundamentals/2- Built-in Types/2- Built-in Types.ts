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
let totalSales = 123_456_789;
let courseName = "TypeScript";
let isPublished: boolean = true;