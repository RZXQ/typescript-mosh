"use strict";
// ===========================================================
//            1. Using `const` for Optimized Code
// ===========================================================
// Using `const` can generate optimized code by preventing reassignment
// and ensuring that the value remains constant.
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
