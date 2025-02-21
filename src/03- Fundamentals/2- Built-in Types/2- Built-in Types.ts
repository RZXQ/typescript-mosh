// ===========================================================
//                 JavaScript vs TypeScript Types
// ===========================================================
// |   JavaScript Types   |   TypeScript Types               |
// |-----------------------|----------------------------------|
// | number               | any                              |
// | string               | unknown                          |
// | boolean              | never                            |
// | null                 | enum                             |
// | undefined            | tuple                            |
// | object               |                                  |
// ===========================================================

// We don't always need to annotate variables. TypeScript compiler can infer the type based on the value.

let sales = 123_456_789;
let course = "TypeScript";
let is_published: boolean = true;
