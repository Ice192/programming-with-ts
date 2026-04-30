import { question } from "readline-sync"

// 13) Distance Travele
function traveled (speed: number, hour: number): number{
    let result = 0
    for(let i = 1; i <= hour; i++){
        result = speed * i
        console.log(`in ${i} hour, Distance traveled is ${result}`)
    }
    return result
}

const speed = question("What is the speed of the vehicle in mph? ")
const numSpeed = Number(speed)
const hour = question("How many hours has it traveled? ")
const numHour = Number(hour)

try{
    if(!isNaN(numSpeed) && !isNaN(numHour)){
        console.log(traveled(numSpeed,numHour))
    } else {
        throw new Error("Input number of speed and hour")
    }
} catch(error) {
    console.log(error);
    
}
