import { question } from "readline-sync"

const email:{[key:string]: string} = {
    "rais": "muhrais@gmail.com"
}

function formatEmail(text: string) : boolean{
const include = '@gmail.com'

let word = ''
let isPrint = false
 for(const x of text){
    if(x === '@'){
        isPrint = true
        word += x
    }
    else if(isPrint){
        word += x
    }
}

if (include === word){
    return true
}
return false
}

function toLower(huruf:string):string{
    const huruf_kecil = "abcdefghijklmnopqrstuvwxyz"
    const huruf_besar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(let i = 0; i < huruf_besar.length; i++){
        const kecil = huruf_besar[i]
        if( kecil === huruf){
            const convert = huruf_kecil[i]
            if(convert === undefined){
                return huruf
             }
            return convert
        } 
    }
    return huruf
}

function cleanText (text: string): string{
    let print = ''
    let isPrint = true
    for(const char of text){
        const lower = toLower(char)
        if(lower === " "){
            if(isPrint){
                print += lower
                isPrint = false
            }
        } else {
            print += lower
            isPrint = true
        }
    }
    return print
}


function createEmail (email:{[key:string]: string}){
    const name = question("Your name : ")
    const clean_name = cleanText(name)
   
    if(email[clean_name] !== undefined){
        return `this name already exists`
    }
    const your_email = question("Email    : ")

    if(!clean_name || !formatEmail(your_email)){
        return "Invalid input"
    }
    email[clean_name] = your_email

    return "Success"
}

function findEmail (email: {[key:string]: string}): string{
    const find = question("Input your name : ")
    const clean_name = cleanText(find)
        if(email[clean_name] !== undefined){
            return "Your Email : " + email[clean_name]            
        } else {
            return "Email not found"
        }
}

function updateEmail (email: {[key:string]: string}){
    const name = question("Input your name : ")
    const clean_name = cleanText(name)
    const your_email = question("Input your latest email : ")

    if(email[clean_name] === your_email){
        const update = question("Input new email : ")

        if(!formatEmail(update)){
            console.log("Invalid email baru");
        } else {
            email[clean_name] = update
            console.log("Update berhasil");
        }
        
    } else {
        console.log("Nama atau email salah");
    }
}

function deleteEmail (email: {[key:string]: string}){
    const name = question("Input your name : ")
    const clean_name = cleanText(name)
    const your_email = question("Input your email : ")

    if(email[clean_name] === your_email){
        delete email[clean_name]
        console.log("Delete Berhasil");
        
    } else {
        console.log("Nama atau email salah");
    }
}

let isAsk = true
while(isAsk){
    console.log("1. Buat Email");
    console.log("2. Cari Email");
    console.log("3. Update Email");
    console.log("4. Delete Email");
    console.log("-------------------");

const input = question("Pilih 1 - 4  ")
const choose = Number(input)

if(choose === 1){
    console.log(createEmail(email))
} else if (choose === 2){
    console.log(findEmail(email))
} else if(choose === 3){
    updateEmail(email)
} else if (choose === 4){
    deleteEmail(email)
} else {
    console.log("Pilih antara 1 sampai dengan 4");
}
 console.log(email);
 const stop = question("Stop (y) ")
 if(stop === "y"){
    isAsk = false
 }
 
}






