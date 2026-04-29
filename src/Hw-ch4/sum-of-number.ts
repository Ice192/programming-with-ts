const readline = require("readline-sync");

// 17) Sum of Numbers
let sum = 0
while(true){
    const number = readline.question("Input Number: ")
    const convertNum = Number(number)
    if(convertNum > 0 && !isNaN(convertNum)){
        sum += convertNum
    } else {
        break
    }
}

console.log("Total sum is ", sum);
