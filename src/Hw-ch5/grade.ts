import { question } from "readline-sync"

function score (): number[]{
   const result: number[] = []
   for(let i = 0; i < 5;i++){
    const yourScore = question("Enter your score: ")
    const numScore = Number(yourScore)

    if(numScore > 0 && numScore <= 100){
        result.push(numScore)
    } else {
        result.push(0)
    }
   }
   return result
}

function calcAverage (scores: number[]) : number {
    let sum = 0
    for(const score of scores){
        sum += score
    }
    return sum / scores.length
}

function grade (average: number) : string {
    if (average < 60){
        return "F"
    } else if (average <70) {
        return "D"
    } else if (average <80) {
        return "C"
    } else if (average <60) {
        return "B"
    } else {
        return "A"
    }
}

const your_score = score() 
const average = calcAverage(your_score)
const your_grade = grade(average)

console.log(your_score);
console.log(`Your average score ${average}`);
console.log(`Your grade is ${your_grade}`);

