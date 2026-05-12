import { question } from "readline-sync"

function fullName (name: string){
    return `Satu untuk ${name}, Satu untuk ku`
}

const name = question("Nama: ")

console.log(fullName(name));
