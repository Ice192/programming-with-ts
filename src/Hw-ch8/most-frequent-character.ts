function mostFreaquentCharacter (chars: string): string{
    const frequency:{[key:string]: number} = {}
    let maxChar = ''
    let maxCount = 0

    for(const char of chars) {
        if(char === " "){
            continue
        }
        if(frequency[char] === undefined){
            frequency[char] = 1
        } else {
            frequency[char] += 1
        }

        if(frequency[char] > maxCount) {
            maxCount = frequency[char]
            maxChar = char
        }
    }
    return `Character ${maxChar} muncul sebanyak ${maxCount} kali`
}

const chars = "iasdfiohwf8fhaiusdbfibuw8eg                                       fSDBJFIASOUFBGAUOSBDOUBASOBUASBDUOBARUBUSIFBVUBRUVBERG"
console.log(mostFreaquentCharacter(chars));
