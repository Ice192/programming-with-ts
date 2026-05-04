import { question } from "readline-sync";

const input = question("Enter numbers without space : ")

let total = 0
for(const number of input){
    const angka = Number(number)
    if(angka > 0){
        total += angka
    }
}

console.log("Total each digits : ", total);
