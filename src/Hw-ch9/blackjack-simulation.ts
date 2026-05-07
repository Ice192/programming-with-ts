import { question } from "readline-sync"

const suits = ['♠️', '❤️', '♦️', '♣️']
const numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

const deck = []

let print = ''
for(const suit of suits){
    for(const number of numbers){
        print += number+suit
        deck.push(print)
        print = ''
    }
}

function hide (cards: string[]): string{
    let print = ""
    for(let i = 0; i < cards.length;i++){
        if(i === cards.length-1){
            print += "??"
        } else {
            print += cards[i] + "  "
        }
    }
    return print
}

function shuffleCard (deck: string[]){
    for(const card in deck){
        const newIndex = Math.floor(Math.random()*deck.length)
        
        if(deck[newIndex] === undefined || deck[card]  === undefined){
           throw new Error("Cannot shuffle undefined value") 
        }
        const temp = deck[card]
        deck[card] = deck[newIndex]
        deck[newIndex] = temp
    }
    return deck
}

function draw (deck: string[], player: string[]){
        const take = deck.splice(deck.length-1,1)
        if(take[0] === undefined){
            throw new Error('Undefined value')
        }
        player.push(take[0])
    return player
}

function isThere (char: string): boolean{
    const numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K','0','1']
    for(const x of numbers){
        if(char === x){
            return true
        }
    }
    return false
}

function cleanCard (player:string[]){
    const number_player = []
    let number = ''
    for(const value of player){
        for(const char of value){
            if(isThere(char)){
                number += char
            }
        }
        number_player.push(number)
        number = ''
    }
    return number_player
}

function ruleAs (): number{
    let num = 0
    let isAgain = true
    while(isAgain){
        const input = question("As for 1 | 11 : ")
        const number = Number(input)

    if(number === 1 || number === 11){
        num += number
        isAgain = false
    } else {
        console.log("Input not 1 or 11");
    }
    }
    return num
}

function totalCard (player: string[], isPlayer: boolean): number {
    let count = 0
    for(const value of player){
        const num = Number(value)

            if(!isNaN(num)){
            count += num
        } else {
            if(value === "A"){
                if(isPlayer){
                    count += ruleAs()
                } else {
                    if(count <= 10){
                        count += 11
                    } else {
                        count++
                    }
                }
            } else {
                count += 10
            }
        }
    }
        
    return count
}


//Game Start
// Shuffle card
const random_shuffle = Math.floor(Math.random()*10)
for(let i = 0; i < random_shuffle; i++){
    shuffleCard(deck)
}

// Take card
const player: string[] = []
const dealer: string[] = []

for(let i = 0; i < 2; i++){
    draw(deck,player)
    draw(deck,dealer)
}

// Menampilkan masing-masing kartu
console.log("You card")
console.log(player)

let enemy_number = cleanCard(dealer)
let enemy_total = totalCard(enemy_number, false)

// dealer draw
while(enemy_total < 17){
    draw(deck,dealer)
    enemy_number = cleanCard(dealer)
    enemy_total = totalCard(enemy_number, false)
}
console.log(hide(dealer)); // final card dealer

let isYouDraw = true
    while(isYouDraw){
    
    const you_decide = question("Draw a card (y) ")
        if(you_decide === "y"){
            draw(deck,player)
        } else {
            isYouDraw = false
        } 
    console.log(player);

}
const you_number = cleanCard(player)
const you_total = totalCard(you_number, true)

console.log("You   : " + player);
console.log("Enemy   : " + dealer);

console.log("Total your number : ", you_total);
console.log("Total enemy number : ", enemy_total);

// Memutuskan pemenang
if (you_total > 21 && enemy_total > 21) {
    console.log("Draw")

} else if (you_total > 21) {
    console.log("Enemy Win")

} else if (enemy_total > 21) {
    console.log("You Win")

} else if (you_total > enemy_total) {
    console.log("You Win")

} else if (enemy_total > you_total) {
    console.log("Enemy Win")

} else {
    console.log("Draw")
}











        







