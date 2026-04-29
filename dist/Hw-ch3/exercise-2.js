"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise 2 - Roulette Wheel Colors
function isOdd(number, reverse) {
    if (reverse) {
        if (number % 2 === 0) {
            return `pocket ${number} are red`;
        }
        else {
            return `pocket ${number} are black`;
        }
    }
    else {
        if (number % 2 === 0) {
            return `pocket ${number} are black`;
        }
        else {
            return `pocket ${number} are red`;
        }
    }
}
function roulatte() {
    for (let i = 0; i < 37; i++) {
        if (i === 0) {
            console.log(`pocket ${i} is Green`);
        }
        else if (i <= 10) {
            console.log(isOdd(i, false));
        }
        else if (i <= 18) {
            console.log(isOdd(i, true));
        }
        else if (i <= 28) {
            console.log(isOdd(i, false));
        }
        else if (i <= 36) {
            console.log(isOdd(i, true));
        }
    }
}
roulatte();
//# sourceMappingURL=exercise-2.js.map