import fs from 'fs'
import { text } from 'stream/consumers';

const code:{[key: string]:string} = {
  "A": "%", "a": "9",
  "B": "@", "b": "#",
  "C": "&", "c": "8",
  "D": "*", "d": "7",
  "E": "!", "e": "6",
  "F": "(", "f": "5",
  "G": ")", "g": "4",
  "H": "-", "h": "3",
  "I": "+", "i": "2",
  "J": "=", "j": "1",
  "K": "{", "k": "0",
  "L": "}", "l": "z",
  "M": "[", "m": "y",
  "N": "]", "n": "x",
  "O": ":", "o": "w",
  "P": ";", "p": "v",
  "Q": "'", "q": "u",
  "R": ".", "r": "t",
  "S": "<", "s": ",",
  "T": ">", "t": "r",
  "U": "?", "u": "q",
  "V": "/", "v": "p",
  "W": "$", "w": "o",
  "X": "|", "x": "n",
  "Y": "_", "y": "m",
  "Z": "^", "z": "l",
  ".": "R", ",": "s",
  "?": "U", "!": "E"
}
// Read file
const text_file = fs.readFileSync("files/text.txt","utf-8")

// Untuk mengubah text menjadi code
function encryption (text: string): string{
let print = ''
    for(const char of text){
        const result = code[char]
        if(result === undefined){
            print += ' '
        } else {
            print += result
        }
    }
    return print
}

const encryption_result = encryption(text_file)

fs.writeFileSync("files/encryption.txt", encryption_result)

// Menyimpan sementara property
const code_key: string[] = []
for(const x in code){
    code_key.push(x)
}

// Untuk mengubah code menjadi text
function decription (text: string): string{
    let print = ''
    for(const x of text){
        if(x === ' '){
            print += ' '
        }
        for(const y of code_key){
            if(x === code[y]){
                print += y
            }
        }
    }
    return print
}

const text_after_code = fs.readFileSync("files/encryption.txt","utf-8")

console.log(decription(text_after_code));

