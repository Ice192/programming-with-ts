// function countyTax (amount: number): number{
//     const result = amount * 0.025
//     return result
// }

import { question } from "readline-sync"

// function stateTax (amount: number): number{
//     const result = amount * 0.5
//     return result
// }

function totalTax(amount: number): number{
    const countyTax = amount * 0.025
    const stateTax = amount * 0.05

    console.log("The amount of county sales tax : ", countyTax)
    console.log("The amount of state sales tax : ", stateTax)

    return countyTax + stateTax
}

const number = question("Enter total sales for the month : ")
const amount = Number(number)
if(!isNaN(amount)){
    console.log("The total sales Tax is : ", totalTax(amount))
} else {
    console.log("Input should be number");
    
}