import { question } from "readline-sync"

// Math Quiz

function mathQuiz (): number{
    const num1 = Math.floor(Math.random() * 1000)
    const num2 = Math.floor(Math.random() * 1000)

    console.log(`${num1} + ${num2} = ?`);

    let result = num1 + num2
    play(result)
    return result
}

function play(result: number) {
        let isAnswer = true
            const guess = question("Enter your Answer ")
            const numGuess = Number(guess)
    
            if(numGuess === result){
                console.log("Congratulation! You Win");
                isAnswer = false
            } else if (numGuess < 0) {
                console.log("Input should be number & Non Negative number");
            } else {
                console.log(`Wrong! the Answer is ${result}`);
            }
        }

    console.log(mathQuiz());
    