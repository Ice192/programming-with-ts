import { question } from "readline-sync"


function generate (num: number): string{
    let result = ''
    if(num === 1){
        result = 'rock'
    } else if (num === 2){
        result = 'paper'
    } else if (num === 3){
        result = 'scissor'
    }
    return result
}

// user input


function decide (computer: string, user: string) : string | undefined{
            if(computer === user){
                return ''
            }

            if(computer === 'scissor'){
                if(user === 'rock'){
                    return 'Player Win'
                   
                } else {
                    return 'Computer Win'
                   
                }
            }

            if(computer === 'rock'){
                if(user === 'paper'){
                    return 'Player Win'
                 
                } else {
                    return 'Computer Win'
                }
            }

            if(computer === 'paper'){
                if(user === 'scissor'){
                    return 'Player Win'
                   
                } else {
                    return 'Computer Win'
                
                }
            }
        }

function game (){
    let start = true

    while(start){
        const random = Math.floor(Math.random()*3) + 1
        const computer = generate(random)
        const user = question("rock | paper | scissor : ")
        if (user === "rock" || user === "paper" || user === "scissor" ){
            const result = decide(computer,user)
            console.log(`You ${user} vs ${computer} Computer`)
            if(result !== ''){
                start = false
                console.log(result);
                
            }
        }

    }
}

game()
