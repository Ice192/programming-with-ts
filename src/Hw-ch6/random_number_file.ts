import fs, { read } from "fs"
import { question } from "readline-sync"
const input = question("How many random number : ")
const num = Number(input)

let i = 0
const result = []
while(i < num){
    const random = Math.floor(Math.random() * 500) + 1

    result.push(random)
    i++
}

const data = result.toString()

// Write file
fs.writeFileSync("files/random_number.txt", data)
console.log("Success")


// Read file
const read_num = fs.readFileSync("files/random_number.txt", "utf-8")
console.log(read_num)

const angka = read_num.split(",")
console.log(angka);

let hasil = 0

for (const nomor of angka){
    console.log(nomor);
    hasil += Number(nomor)
}

console.log("Total number : ", hasil);



