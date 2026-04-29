const readline = require("readline-sync");
// 14) Average Rainfall
function averageRainfall(years: number) : number{
    let totalRainfall = 0
    let countRainfall = 0
    let invalid = 0
    
    for(let i = 0; i < years; i++){
        for(let month = 0; month < 12; month++){
            const rainfall: number = readline.question("Number rainfall: ")
            const current = Number(rainfall)
            if(!isNaN(current)){
                totalRainfall += current
                countRainfall++
            } else {
                invalid++
            }

        }
    }
    console.log("Total Rainfall is ", totalRainfall);
    console.log("Total valid month is ", countRainfall);
    console.log("Total Invalid month is ", invalid);
    
    return totalRainfall/countRainfall
}

const year = readline.question("How many years? ")
console.log("Average of Rainfall is ",averageRainfall(year))