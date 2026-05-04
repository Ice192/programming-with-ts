import { question } from "readline-sync";

const valid_char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-"
const groups = ['aAbBcC','dDeEfF','gGhHiI','jJkKlL','mMnNoO','pPqQrRsS','tTuUvV','wWxXyYzZ']

function transform (char:string): number {
    let number = 0
    for(const index in groups){
        if(groups[index]?.includes(char)){
            number += Number(index) + 2
        }
    }
    return number
}
const input = question("Input telephone with format XXX-XXX-XXXX : ")

let print = ''
    if(input.length === 12 && input[3] === "-" && input[7] === "-"){
        for(const char of input){
            if(valid_char.includes(char)){
                const number_char = Number(char)
                if(char === '-' || !isNaN(number_char)){                   
                    print += char
                } else {
                    const transfer = transform(char)
                    print += transfer 
                }
            } else {
                throw new Error("Invalid symbols except '-'")
            }
        }
    } else {
        throw new Error("Input Invalid Format")
    }

    console.log("Your telephone number is ",print);
    