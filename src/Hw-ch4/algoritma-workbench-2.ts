import { question } from "readline-sync"
// 2) Algoritma Workbench
function add (a:number, b:number): number {
    return a + b
}

let isAgree = true
    while(isAgree){
        const num1 = question("First Number: ")
        const num2 = question("Second Number: ")
        console.log(typeof num1) // Walaupun num diinilisasikan sebagai number tetap typenya akan string

        const finalNum1 = Number(num1)  
        const finalNum2 = Number(num2)

        console.log(add(finalNum1,finalNum2))

        const check = question("Continue (yes): ")
            if(check === "yes"){
                continue
            } else {
                isAgree = false
            }
    }
