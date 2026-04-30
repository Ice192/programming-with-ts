import { question } from "readline-sync"

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
const weight = question("Input pound: ")
const numWeight = Number(weight)

try {
    if(!isNaN(numWeight)){
    console.log(`Shipping charges with ${numWeight} pounds is ${shippingCharges(numWeight)}$`)
} else {
    throw new Error ("Input number")
}
} catch (error) {
    console.log(error)
}
