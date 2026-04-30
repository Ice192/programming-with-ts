import { question } from "readline-sync";

// 16) Pennies for Pay
function toDollar (penny: number): number{
    return penny/100
}
function pennies (days: number):number{
    let penny = 1
    console.log(`In 1, your pay is $${toDollar(penny)}`);
    for(let i = 1; i < days; i++){
        penny *= 2
        console.log(`In ${i+1}, your pay is $${toDollar(penny)}`);
        
    }
    
    return toDollar(penny)
}

const days = question("How much day? ")
const numDays = Number(days)

try {
    if(!isNaN(numDays)){
    console.log(`The Payment: $${pennies(numDays)}`);
} else {
    throw new Error("Invalid input")
}
} catch (error) {
    console.log(error);
}
