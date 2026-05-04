import { question } from "readline-sync"

const sales = []
for(let i = 0; i < 7; i++){
    const input = question("Input sale : ")
    const number = Number(input)

    sales.push(number)
}

let total = 0
for(const sale of sales){
    console.log(`$${sale}`);
    total += sale
}

console.log(`Total sales is $${total}`);
