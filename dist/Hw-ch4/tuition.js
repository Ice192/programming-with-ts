"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 19) Tuition Increase
function tuition() {
    let semester = 8000;
    let increase = 0.03;
    let result = 0;
    for (let i = 1; i <= 5; i++) {
        const tuitionIncrease = semester * increase * i;
        result = semester + tuitionIncrease;
        console.log(`Tuition in ${i} year is $${result}`);
    }
    return result;
}
console.log(tuition());
//# sourceMappingURL=tuition.js.map