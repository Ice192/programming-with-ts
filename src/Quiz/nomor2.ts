import { log } from "node:console"
import { question } from "readline-sync"

const warna:{[key: string]: number} = {
    "black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "grey": 8,
    "white": 9
}

function toLower (chars: string){
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(let i = 0; i < upper.length; i++){
        if(chars === upper[i]){
            return lower[i]
        }
    }

    return chars   
}

function splitWord (text: string){
    const result = []
    let word = ''
    for(const char of text){
        const lower = toLower(char)
        if(lower === '-'){
            result.push(word)
            word = ''
        } else {
            word += lower
        }
    }
    if(word !== ''){
        result.push(word)
    }
    return result
}

const input = question("Choose the color : ")
const colors = splitWord(input)
console.log(colors);


function print (colors: string[]){
    let print = ''
    let count = 0
    for(let i = 0; i < 2; i++){
        const index = colors[i]
        if(index === undefined){
            throw new Error("Invalid Undefined Value")
        }
        const value = warna[index]
        if(value === undefined){
            print = ''
        } else {
            print += value
            count += value
        }
    }
    return {print,count}
}

console.log(print(colors).print);
console.log(print(colors).count);
