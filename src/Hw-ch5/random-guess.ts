// Math Quiz
import { question } from "readline-sync"

function playQuiz (result: number) : number{
    let isAnswer = true
    let count = 0
    while(isAnswer){
        const guess = question("Enter your guess ")
        const numGuess = Number(guess)

        if(numGuess === result){
            console.log("Congratulation! You Win");
            isAnswer = false
            count++
        } else if (numGuess > result){
            console.log("Still higher");
            count++
        } else if (numGuess < result){
            console.log("Still Lower");
            count++
        } else {
            console.log("Input should be number");
        }
        
    }
    return count
}
const num1 = Math.floor(Math.random() * 100)
console.log("Total guess = ",playQuiz(num1))