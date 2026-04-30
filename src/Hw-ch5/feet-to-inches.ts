import { question } from "readline-sync";

function feet_to_inches (feet: number): number{
    return feet * 12
}

const number = question("Enter how many feet : ")
const feet = Number(number)
if(!isNaN(feet)){
    console.log(`${feet} = ${feet_to_inches(feet)} inches`, )
} else {
    console.log("Input should be number");
    
}