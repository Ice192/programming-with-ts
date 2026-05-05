function isThere (char: string): boolean{
     const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

     for(const character of capital){
        if(char === character){
            return true
        }
     }
    return false
}

function toLower (char:string): string{
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = ''

    for(let i = 0; i < capital.length; i++){
        if(char === capital[i]){
            const huruf = lower[i]
            result += huruf
        }
    }
    return result
}

function splitWord (sentence: string): string{
let word = ''

    for(const huruf of sentence){
        if(word !== '' && isThere(huruf)){
            word += ' ' + toLower(huruf)
        } else {
            word += huruf
        }
    }
    return word
}

console.log(splitWord("HelloWorldForEveryone"));
