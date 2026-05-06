import fs from 'fs'

// Membaca file
const text = fs.readFileSync("files/lorem.txt", "utf-8")

// Memvalidasi hanya alphabet yang diterima
function isThere (char: string): boolean{
    const valid = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ-'

    for(const x of valid){
        if(x === char){
         return true
        }
    }
    return false
}

// Menyamakan dengan huruf kecil semua
function toLower (char:string): string{
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = ''

    for(let i = 0; i < capital.length; i++){
        if(char === capital[i]){
            result += lower[i]
        }
    }
    if(result === ''){
        return char
    }
    return result
}

// Memisahkan kata dan di simpan ke array data
function splitWord(char: string): string[] {
    const set = []
    let word = ''

    for(const x of char){
        if(isThere(x)){
            const char = toLower(x)
            word += char
        } else if (word !== ''){
            set.push(word)
            word = ''
        } else {
            word = ''
        }
    }

    if(word !== ''){
        set.push(word)
    }

    return set
}

const split = splitWord(text)

// Untuk menghitung banyaknya kata yang muncul
function setWord (words: string [] ) : { [key:string] :number } {
    const setWord:{ [key:string]: number} = { }

    for(const word of words){
        if(setWord[word] === undefined){
            setWord[word] = 1
        } else {
            setWord[word] += 1
        }
    }
return setWord
}

const set_word = setWord(split)
console.log(set_word);


// Untuk menyimpan kata-kata yang muncul sekali
function uniqueWord (set:{ [key:string]: number}): string[]{
    const uniqueWord = []
    const target = 1

    for(const x in set){
        if(set[x] === target){
            uniqueWord.push(x)
        }
    }
    return uniqueWord
}

// Menampilkan Hasil
const unique = uniqueWord(set_word)

console.log("Unique Word : ");

for(const word of unique){
    console.log(word);
    
}
