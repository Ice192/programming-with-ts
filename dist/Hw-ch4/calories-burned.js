"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 11) Calories Burned
function caloriesBurned() {
    const burn = 4.2;
    let calories = 0;
    for (let i = 10; i <= 30; i += 5) {
        const calorieBurn = burn * i;
        calories += calorieBurn;
        console.log(calories);
    }
    return calories;
}
console.log("Total Calories it will burn is ", caloriesBurned());
//# sourceMappingURL=calories-burned.js.map