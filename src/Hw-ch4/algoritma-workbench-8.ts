import { question } from "readline-sync"

// 8) Validation Input - Algoritma Workbench
function validation (num: number) : string{
    if(num > 0){
        return `Valid Input`
    } else {
        return `Invalid Input`
    }
}

const number = question("Check Validation Number: ")
const aNum = Number(number)
console.log(validation(aNum))