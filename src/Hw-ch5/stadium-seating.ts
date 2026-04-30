import { question } from "readline-sync";

// Stadium Seating
const tiketA = question("Total tiket class A : ")
const tiketB = question("Total tiket class B : ")
const tiketC = question("Total tiket class C : ")

const numTiketA = Number(tiketA)
const numTiketB = Number(tiketB)
const numTiketC = Number(tiketC)

function income (a: number, b: number, c: number) : number{
    return (a*20)+(b*15)+(c*10)
}
const result = income(numTiketA,numTiketB,numTiketC) 
console.log(`Income generate from ticket sales is $${result}`);
