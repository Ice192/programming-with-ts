"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
// 14) Average Rainfall
function averageRainfall(years) {
    let totalRainfall = 0;
    let countRainfall = 0;
    for (let i = 0; i < years; i++) {
        for (let month = 0; month < 12; month++) {
            const rainfall = 12; // ask input number of rainfall
            totalRainfall += rainfall;
            countRainfall++;
        }
    }
    console.log("Total Rainfall is ", totalRainfall);
    console.log("Total month is ", countRainfall);
    return totalRainfall / countRainfall;
}
const year = 4; //ask user input year
console.log("Average of Rainfall is ", averageRainfall(year));
//# sourceMappingURL=average-rainfall.js.map