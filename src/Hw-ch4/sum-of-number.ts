import { question } from "readline-sync"

// 17) Sum of Numbers
let sum = 0
while(true){
    const number = question("Input Number: ")
    const convertNum = Number(number)
    if(convertNum > 0 ){
        sum += convertNum
    } else {
        break
    }
}

console.log("Total sum is ", sum);
