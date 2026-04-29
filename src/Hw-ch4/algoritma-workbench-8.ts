const readline = require("readline-sync");
// 8) Validation Input - Algoritma Workbench
function validation (num: number) : string{
    if(num > 0){
        return `Valid Input`
    } else {
        return `Invalid Input`
    }
}

const number: number = readline.question("Check Validation Number: ")
console.log(validation(number))