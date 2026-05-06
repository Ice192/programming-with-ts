import { question } from "readline-sync"

const capitals:{[key:string]: string} = {
        "Alabama":"Montgomery",	
        "Alaska": "Juneau",
        "Arizona": "Phoenix",	
        "Arkansas": "Little Rock",
        "California":	"Sacramento",	
        "Colorado": "Denver",	
        "Connecticut": "Hartford",
        "Delaware": "Dover",
        "Florida": "Tallahassee",	
        "Georgia": "Atlanta",	
        "Hawaii": "Honolulu",	
        "Idaho": "Boise",
        "Illinois": "Springfield",	
        "Indiana": "Indianapolis",
        "Iowa": "Des Moines",	
        "Kansas":	"Topeka",
        "Kentucky": "Frankfort",
        "Louisiana": "Baton Rouge",
        "Maine": "Augusta",
        "Maryland": "Annapolis",
        "Massachusetts": "Boston",	
        "Michigan": "Lansing",
        "Minnesota":	"Saint Paul",
        "Mississippi": "Jackson",
        "Missouri": "Jefferson City",
        "Montana": "Helena",
        "Nebraska": "Lincoln",	
        "Nevada": "Carson City",
        "New Hampshire": "Concord",	
        "New Jersey": "Trenton",	
        "New Mexico": "Santa Fe",
        "New York": "Albany",	
        "North Carolina":	"Raleigh",	
        "North Dakota": "Bismarck",
        "Ohio": "Columbus",	
        "Oklahoma": "Oklahoma City",
        "Oregon": "Salem",
        "Pennsylvania": "Harrisburg",	
        "Rhode Island": "Providence",	
        "South Carolina":	"Columbia",
        "South Dakota": "Pierre",
        "Tennessee": "Nashville",	
        "Texas": "Austin",
        "Utah": "Salt Lake City",	
        "Vermont": "Montpelier",
        "Virginia": "Richmond",
        "Washington": "Olympia",	
        "West Virginia": "Charleston",	
        "Wisconsin": "Madison",	
        "Wyoming": "Cheyenne"
    }

    // Mengubah menjadi huruf kecil
    function toLower (huruf: string): string{
        const huruf_besar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const huruf_kecil = "abcdefghijklmnopqrstuvwxyz"
        let result = ''
        for(let i = 0; i < huruf_besar.length; i++){
            if(huruf_besar[i] === huruf){
                result += huruf_kecil[i]
            }
        }
        if(result === ''){
        return huruf
    }
    return result
    }

    // Menyamakan jawaban dengan key (menggunakan huruf kecil semua)
    function validAnswer (answer: string): string{

    let word = ''

    for(const huruf of answer){
        const lower = toLower(huruf)
        word += lower
    }

    return word
}

    // Simpan sementara states berisi property dari objek capitals
    const states = []
    for(const state in capitals){
        states.push(state)
    }
    
    let correct = 0
    let wrong = 0
    
    for(let i = 0; i < 10; i++){
        const random_state = states[Math.floor(Math.random()*states.length)]
        const answer = question(`What is Capital of ${random_state}? `)

        if(random_state === undefined){
            throw new Error("Invalid undefined value")
        }

        const correct_answer = capitals[random_state]

        if(correct_answer === undefined){
            throw new Error("Invalid undefined value")
        }        

        if(validAnswer(answer) === validAnswer(correct_answer)){
            console.log("Correct");
            correct++
        } else {
            console.log(`Wrong! the right answer is ${correct_answer}`);
            wrong++
        }

    }
    
    console.log("Correct : ", correct);
    console.log("Wrong   : ", wrong);
    

