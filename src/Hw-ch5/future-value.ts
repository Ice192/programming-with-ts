import { question } from "readline-sync"

function future_value (amount: number, interest: number, month: number): number{
    interest /= 100
    return amount * (1 + interest)** month
}

const inputAmount = question("Input the present value of the account : ")
const amount = Number(inputAmount)

const inputInterest = question("Input the monthly interest rate : ")
const interest = Number(inputInterest)

const inputMonth = question("Input the number of month : ")
const month = Number(inputMonth)

if(!isNaN(amount) && !isNaN(interest) && !isNaN(month)){
    const future = future_value(amount, interest, month)
    console.log(`The Future value of the account after ${month} is `, future);
    
} else{
    throw new Error("Input should be number")
}