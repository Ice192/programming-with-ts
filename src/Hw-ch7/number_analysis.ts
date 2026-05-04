const numbers = []
for(let i = 0; i < 20; i++){
    const number = Math.floor(Math.random()*20)

    numbers.push(number)
}

function averageNumber (numbers: number[]) : number {
    const sum = totalNumber(numbers)
    return sum / numbers.length
}

function minNumber (numbers: number[]) : number {
    let min = 100
    for(const score of numbers){
        if(score < min){
            min = score
        }
    }
    return min
}

function maxNumber (numbers: number[]) : number {
    let max = 0
    for(const score of numbers){
        if(score > max){
            max = score
        }
    }
    return max
}

function totalNumber (numbers: number[]) : number {
    let total = 0
    for(const number of numbers){
        total += number
    }
    return total
}

const lowest = minNumber(numbers)
const highest = maxNumber(numbers)
const average = averageNumber(numbers)
const total = totalNumber(numbers)

console.log("The Lowest number in the list ", lowest);
console.log("The Higher number in the list ", highest);
console.log("The total of the numbers in the list ", total);
console.log("The average of the numbers in list ", average);

