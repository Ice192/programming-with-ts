"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
// 4) Algoritma Workbench
let result = 0;
for (let i = 0; i < 10; i++) {
    const num = readline.question("Input Number: ");
    const finalNum = Number(num);
    if (!isNaN(finalNum)) {
        result += finalNum;
    }
}
console.log("Result = ", result);
//# sourceMappingURL=algoritma-workbench-4.js.map