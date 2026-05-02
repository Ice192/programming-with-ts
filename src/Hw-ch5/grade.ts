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

function minScore (scores: number[]) : number {
    let min = 100
    for(const score of scores){
        if(score < min){
            min = score
        }
    }
    return min
}

function maxScore (scores: number[]) : number {
    let max = 0
    for(const score of scores){
        if(score > max){
            max = score
        }
    }
    return max
}

function medianScore (scores: number[]): number|undefined{
    for(let i = 0; i < scores.length; i++){   
        for(let j = i + 1; j < scores.length; j++){
            const first = scores[i]
            const second = scores[j]     
            if(first !== undefined && second !== undefined){
                if(first > second){
                    scores[i] = second
                    scores[j] = first
                }
            }
        }
    }
    
    let median
    if(scores.length % 2 === 0){
        const mid = scores.length/2
        const first = scores[mid - 1]
        const second = scores[mid]

            if(first !== undefined && second !== undefined){
                median = (first+second) / 2
            }
    } else {
        const index = Math.floor(scores.length/2)
        median = scores[index]
    }
    return median
}


function grade (average: number) : string {
    if (average >= 90){
        return "A"
    } else if (average >= 80) {
        return "B"
    } else if (average >= 70) {
        return "C"
    } else if (average >= 60) {
        return "D"
    } else {
        return "E"
    }
}

const your_score = score() 
const average = calcAverage(your_score)
const min_score = minScore(your_score)
const max_score = maxScore(your_score)
const median_score = medianScore(your_score)
const your_grade = grade(average)

console.log(your_score);
console.log(`Your average score ${average}`);
console.log(`Your Maximun score ${max_score}`);
console.log(`Your Minimun score ${min_score}`);
console.log(`Your Median score ${median_score}`);
console.log(`Your grade is ${your_grade}`);

