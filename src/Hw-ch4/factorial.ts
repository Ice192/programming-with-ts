//Calculating the factorial of a Number

import { question } from "readline-sync";

function factorial (num: number): number{
    let number = 1
    let print = ''
    for(let i = 1; i <= num;i++){
        if(i === num){
            print += i
        } else {
            print += i + ' X '
        }
        
        number *= i    
    }
    console.log(`${num}! = ${print} = ${number}`);
    return number
}

const num = question("Enter number to factorial: ")
const number = Number(num)

if(number > 0){
    factorial(number)
} else {
    throw new Error("Invalid Input")
}