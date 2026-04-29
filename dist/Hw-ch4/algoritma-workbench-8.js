"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
// 8) Validation Input - Algoritma Workbench
function validation(num) {
    if (num > 0) {
        return `Valid Input`;
    }
    else {
        return `Invalid Input`;
    }
}
const number = readline.question("Check Validation Number: ");
console.log(validation(number));
//# sourceMappingURL=algoritma-workbench-8.js.map