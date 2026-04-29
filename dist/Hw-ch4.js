"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1) Algoritma Workbench
function firstLoop(num) {
    return num * 10;
}
while (true) {
    const number = 11; // user input
    console.log(firstLoop(number));
    if (firstLoop(number) > 100) {
        break;
    }
}
// 2) Algoritma Workbench
function add(a, b) {
    return a + b;
}
let isAgree = true;
while (isAgree) {
    const num1 = 5; //Untuk user Input
    const num2 = 4; //Untuk user Input
    console.log(add(num1, num2));
    isAgree = false; //Cek, lanjut atau tidak
}
// 3) Algoritma Workbench
let i = 0;
while (i <= 1000) {
    console.log(i);
    i += 10;
}
// 4) Algoritma Workbench
let result = 0;
for (let i = 0; i < 10; i++) {
    const num = 4; //Input User
    result += num;
}
// 5) Algoritma WorkBench
let hasil = 0;
let j = 30;
for (let i = 1; i <= 30; i++) {
    console.log(`${i}/${j}`);
    hasil += i / j;
    j--;
}
console.log("Hasilnya adalah " + hasil);
// 6) Algoritma Workbench
let x = 0;
x++;
x *= 2;
x /= 10;
x -= 100;
console.log(x);
// 7) Algoritma Workbench
let print = '';
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 14; j++) {
        print += "#";
    }
    print += "#\n";
}
console.log(print);
// 8) Validation Input - Algoritma Workbench
function validation(num) {
    if (num < 0) {
        return `Invalid Input`;
    }
    else {
        return `Valid Input`;
    }
}
const number = 100;
console.log(validation(number));
// 9) Validation Input - Algoritma Workbench
function val(num) {
    if (num < 0 || num > 100) {
        return `Invalid Input`;
    }
    else {
        console.log(`Your input is ${num}`);
        return `Valid Input`;
    }
}
console.log(val(number));
// 10) Bug Collector
function bugCollector() {
    let result = 0;
    for (let i = 0; i < 5; i++) {
        const bug = 4; //ask number of bugs
        result += bug;
    }
    return result;
}
console.log("Total bug is ", bugCollector());
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
// 12) Budget Analysis
const amount = 1000000; // user input
function budgetAnalysis(amount) {
    let isAddCost = true;
    while (isAddCost) {
        const cost = 10000; // user input cost
        amount -= cost;
        const ask = 'no'; // ask user to add cost or no
        if (ask === 'no') {
            isAddCost = false;
        }
    }
    return amount;
}
const resultAmount = budgetAnalysis(amount);
if (resultAmount > 0) {
    console.log(`the rest of your money is ${resultAmount}`);
}
else {
    console.log(`your budget is not enough ${resultAmount}`);
}
//# sourceMappingURL=Hw-ch4.js.map