"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 13) Distance Travele
function traveled(speed, hour) {
    let result = 0;
    for (let i = 1; i <= hour; i++) {
        result = speed * i;
        console.log(`in ${i} hour, Distance traveled is ${result}`);
    }
    return result;
}
const speed = 50;
const hour = 5;
console.log(traveled(speed, hour));
//# sourceMappingURL=distance-traveled.js.map