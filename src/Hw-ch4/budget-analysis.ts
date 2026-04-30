import { question } from "readline-sync"

// 12) Budget Analysis
const amount = question("Your Amount of Money: ")
const numAmount = Number(amount)

function budgetAnalysis (amount: number) : number {
    let isAddCost = true
    while(isAddCost){
        const cost = question("Your cost: ")
        const numCost = Number(cost)
        if(!isNaN(numCost)){
            amount -= numCost
        } else {
            console.log('Input number')
        }

        const ask = question("Add cost (yes): ")
        if(ask  === 'yes'){
            continue
        } else {
            isAddCost = false
        }
    }
    return amount
}

try {
    if(!isNaN(numAmount)){
    const resultAmount = budgetAnalysis(numAmount)
        if (resultAmount > 0){
            console.log(`the rest of your money is ${resultAmount}`)
        } else {
            console.log(`your budget is not enough ${resultAmount}`)
        }
} else {
    throw new Error ("Input require number")
}
} catch (error) {
    console.log(error)
}