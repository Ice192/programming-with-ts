"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
// 12) Budget Analysis
const amount = readline.question("Your Amount of Money: ");
function budgetAnalysis(amount) {
    let isAddCost = true;
    while (isAddCost) {
        const cost = readline.question("Your cost: ");
        if (!isNaN(cost)) {
            amount -= cost;
        }
        else {
            console.log('Input number');
        }
        const ask = readline.question("Add cost (yes): ");
        if (ask === 'yes') {
            continue;
        }
        else {
            isAddCost = false;
        }
    }
    return amount;
}
try {
    if (!isNaN(amount)) {
        const resultAmount = budgetAnalysis(amount);
        if (resultAmount > 0) {
            console.log(`the rest of your money is ${resultAmount}`);
        }
        else {
            console.log(`your budget is not enough ${resultAmount}`);
        }
    }
    else {
        throw new Error("Input require number");
    }
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=budget-analysis.js.map