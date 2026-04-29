"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
// 2) Algoritma Workbench
function add(a, b) {
    return a + b;
}
let isAgree = true;
while (isAgree) {
    const num1 = readline.question("First Number: ");
    const num2 = readline.question("Second Number: ");
    console.log(typeof num1); // Walaupun num diinilisasikan sebagai number tetap typenya akan string
    const finalNum1 = Number(num1);
    const finalNum2 = Number(num2);
    console.log(add(finalNum1, finalNum2));
    const check = readline.question("Continue (yes): ");
    if (check === "yes") {
        continue;
    }
    else {
        isAgree = false;
    }
}
//# sourceMappingURL=algoritma-workbench-2.js.map