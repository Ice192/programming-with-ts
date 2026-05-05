import { question } from "readline-sync"

const sentence = question("Make a Sentence : ")
// console.log(splitSentance(sentence));

function toUpper(huruf:string):string{
    const huruf_kecil = "abcdefghijklmnopqrstuvwxyz"
    const huruf_besar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(let i = 0; i < huruf_kecil.length; i++){
        const kecil = huruf_kecil[i]
        if( kecil === huruf){
            const convert = huruf_besar[i]
            if(convert === undefined){
                return huruf
             }
            return convert
        } 
    }

    return huruf
    
}
function capitalize (sentence: string) : string {
    let print = ''
    let shouldcapital = true
    for(const char of sentence){
        if(shouldcapital && char !== " "){
            print += toUpper(char)
            shouldcapital = false
        } else if(char === "."){
            print += char
            shouldcapital = true
        }
        else {
            print += char
        }      
    }

    return print
}


console.log(sentence);

console.log(capitalize(sentence));
