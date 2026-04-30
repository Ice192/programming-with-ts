import { question } from "readline-sync";

// Population
function population(organism:number, increase:number, day: number) {
    increase /= 100
    console.log(`1 day, ${organism} population`);
    for(let i = 2; i <= day; i++){
        const organisme = organism * increase
        organism += organisme
        console.log(`${i}day, ${organism} population`);
    }
    return organism
}

const organism = question("Starting number of organisms: ")
const numOrganism = Number(organism)

const increase = question("Average daily increase: ")
const numIncrease = Number(increase)

const day = question("Number of days to multiply: ")
const numDay = Number(day)

if(numOrganism > 0 && numIncrease > 0 && numDay > 0){
    console.log(population(numOrganism,numIncrease,numDay))
} else {
    throw new Error("Input should be number")
}