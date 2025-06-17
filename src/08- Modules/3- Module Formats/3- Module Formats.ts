// TypeScript Module System Explanation:

// 1. You write ES6 module syntax (modern way):
// import { readFile } from "fs";
// import express from "express";
// export class MyClass {}

// 2. TypeScript compiles this to CommonJS by default (old way):
// const fs_1 = require("fs");
// const express_1 = require("express");
// class MyClass {}
// exports.MyClass = MyClass;

// 3. Why this happens:
// - Most Node.js projects still use CommonJS (require/module.exports)
// - TypeScript defaults to what works everywhere
// - You write modern syntax, but output is compatible with older systems

// 4. To keep ES6 modules in output, configure tsconfig.json:
// {
//   "compilerOptions": {
//     "module": "ES2020",
//     "target": "ES2020"
//   }
// }
// And add "type": "module" to package.json

// Summary: TypeScript lets you write modern code but converts it
// to older format for maximum compatibility
