import { question } from "readline-sync"

function alphabetical(char: string) : boolean{
    const chars = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"

    for(const huruf of chars){
        if(huruf === char){
            return true
        }
    }

    return false
}

function countVowels (sentence: string) : number{
    const vowel = "aAuUiIoOeE"
    let count = 0
    for(const char of sentence){
        for(const vowel_char of vowel){
            if(char === vowel_char){
                count++
            }
        }
    }
    return count
}

function countConsonant (sentence: string) : number{
    const consonant = "bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZ"
    let count = 0
    for(const char of sentence){
        for(const consonant_char of consonant){
            if(char === consonant_char){
                count++
            }
        }
    }
    return count
}
const sentence = question("Enter your text : ")


console.log(sentence);
console.log("Total Vowel ",countVowels(sentence));
console.log("Total Consonant ",countConsonant(sentence));
