import { question } from "readline-sync";

// 4) Algoritma Workbench
let result = 0
for(let i = 0; i < 10; i++){
    const num = question("Input Number: ")
    const finalNum = Number(num) 
    
    if(!isNaN(finalNum)){
        result += finalNum
    }
  
}
console.log("Result = ",result)