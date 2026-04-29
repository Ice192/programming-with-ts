"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 15) Celsius to Fahrenheit Table
function convert(c) {
    return 9 / 5 * c + 32;
}
for (let i = 0; i <= 20; i++) {
    console.log(`${i}C = ${convert(i)}F`);
}
//# sourceMappingURL=convert-fahrenheit.js.map