import { question } from "readline-sync"

function splitName (fullname: string) : string[]{
    const result = []
    let print = ''
    for(const huruf of fullName){        
        if(huruf !== " "){
            print += huruf
        } else if(print !== ''){
            result.push(print)
            print = ''
        } else {
            print = ''
        }
    }
    if(print !== ''){
            result.push(print)
        }
    return result
}

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


function takeInitial (name: string[]): string{
    let print = ''
    for(const nama of name){
        const initial = nama[0]

        if(initial === undefined){
            throw new Error("Undefined value")
        }

        print += `${toUpper(initial)}.`
    }
    return print
}

const fullName = question("Input your fullname : ")

console.log(splitName(fullName));

const name = splitName(fullName)
console.log(takeInitial(name));
