"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
// 9) Validation Input - Algoritma Workbench
function val(num) {
    if (num > 0 && num < 100) {
        console.log(`Your input is ${num}`);
        return `Valid Input`;
    }
    else {
        return `Invalid Input`;
    }
}
const number1 = readline.question("Check Validation Number: ");
console.log(val(number1));
//# sourceMappingURL=algoritma-workbench-9.js.map