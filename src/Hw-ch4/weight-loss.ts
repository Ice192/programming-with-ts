import { question } from "readline-sync";

// Weight Loss
function weightLoss (pound: number): number {
    for(let i = 1; i <= 6; i++){
        pound -= 4
        console.log(`In ${i} month, your pound will ${pound}`)
    }
    return pound
}

const pound = question("Enter your starting weight: ")
const numPound = Number(pound)

try {
    if (!isNaN(numPound)) {
        console.log(weightLoss(numPound), " pound")
    } else {
        throw new Error("Invalid Input")
    }
} catch (error) {
    console.log(error)
}

