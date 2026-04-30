import { question } from "readline-sync"

// 1) Algoritma Workbench
function firstLoop (num: number): number{
    return num * 10
}
while(true){
    const number = question("Input number: ")
    const aNum = Number(number)
    const result = firstLoop(aNum)
    console.log(result)
    if(result > 100 || isNaN(result)){
        break
    }
}