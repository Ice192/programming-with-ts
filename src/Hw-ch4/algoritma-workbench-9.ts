const readline = require("readline-sync");

// 9) Validation Input - Algoritma Workbench
function val (num: number) : string {
    if(num > 0 && num < 100){
        console.log(`Your input is ${num}`);
        return `Valid Input`
    } else {
        return `Invalid Input`
    }
}
const number1: number = readline.question("Check Validation Number: ")
console.log(val(number1));