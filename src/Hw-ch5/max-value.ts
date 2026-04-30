import { question } from "readline-sync";

function max(num1: number, num2: number) {
    if(num1 === num2){
        console.log(`${num1} equal ${num2}`);

    }
    else if(num1 > num2){
        console.log(`${num1} greater than ${num2}`);
    } else {
        console.log(`${num2} greater than ${num1}`);
    }
}

const number = question("Enter first number: ")
const num1 = Number(number)

const number2 = question("Enter second number: ")
const num2 = Number(number2)
if(!isNaN(num1) && !isNaN(num2)){
    max(num1,num2)
} else {
    console.log("Input should be number");
}