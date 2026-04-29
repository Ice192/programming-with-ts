const readline = require("readline-sync");

//Exercise 3 - Shipping Charges
function shippingCharges (weight: number) :number{
    if(weight <= 2){
        return 1.5 * weight
    } else if(weight <= 6){
        return 3 * weight
    } else if(weight <= 10){
        return 4 * weight
    } else {
        return 4.75 * weight
    }
}
const weight = readline.question("Input pound: ")
if(!isNaN(weight)){
    console.log(`Shipping charges with ${weight} pounds is ${shippingCharges(weight)}$`)
} else {
    throw new Error ("Input number")
}