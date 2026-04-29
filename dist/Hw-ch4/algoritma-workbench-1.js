"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
// 1) Algoritma Workbench
function firstLoop(num) {
    return num * 10;
}
while (true) {
    const number = readline.question("Input number: "); // user input
    const result = firstLoop(number);
    console.log(result);
    if (result > 100 || isNaN(result)) {
        break;
    }
}
//# sourceMappingURL=algoritma-workbench-1.js.map