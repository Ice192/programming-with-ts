// 1) Algoritma Workbench
function firstLoop (num: number): number{
    return num * 10
}
while(true){
    const number = 11 // user input
    console.log(firstLoop(number))
    if(firstLoop(number) > 100){
        break
    }
    
}

// 2) Algoritma Workbench
function add (a: number, b: number): number {
    return a + b
}

let isAgree = true
while(isAgree){
    const num1 = 5 //Untuk user Input
    const num2 = 4 //Untuk user Input

    console.log(add(num1,num2))
    isAgree = false //Cek, lanjut atau tidak
}

// 3) Algoritma Workbench
let i = 0
while(i <= 1000){
    console.log(i)
    i+=10
}

// 4) Algoritma Workbench
let result = 0
for(let i = 0; i < 10; i++){
    const num = 4 //Input User

    result += num
}

// 5) Algoritma WorkBench
let hasil = 0
let j = 30
for(let i = 1; i <= 30; i++){
    console.log(`${i}/${j}`)
    hasil += i / j
    j--
}
console.log("Hasilnya adalah " + hasil);

// 6) Algoritma Workbench
let x = 0
x++
x *= 2
x /= 10
x -= 100
console.log(x)

// 7) Algoritma Workbench
let print = ''
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 14; j++){
        print += "#"
    }
    print += "#\n"
}

console.log(print)

// 8) Validation Input - Algoritma Workbench
function validation (num: number) : string{
    if(num < 0){
        return `Invalid Input`
    } else {
        return `Valid Input`
    }
}

const number = 100
console.log(validation(number))

// 9) Validation Input - Algoritma Workbench
function val (num: number) : string {
    if(num < 0 || num > 100){
        return `Invalid Input`
    } else {
        console.log(`Your input is ${num}`);
        return `Valid Input`
    }
}

console.log(val(number));

// 10) Bug Collector
function bugCollector () : number {
    let result = 0
    for(let i = 0; i < 5; i++){
        const bug = 4  //ask number of bugs
        result += bug
    }
    return result
}

console.log("Total bug is ",bugCollector());

// 11) Calories Burned
function caloriesBurned (): number {
    const burn = 4.2
    let calories = 0
    for(let i = 10; i <= 30; i+=5){
        const calorieBurn = burn * i
        calories += calorieBurn
        console.log(calories);
        
    }
    return calories
}
console.log("Total Calories it will burn is ", caloriesBurned());

// 12) Budget Analysis
const amount = 1000000 // user input
function budgetAnalysis (amount: number) : number {
    let isAddCost = true
    while(isAddCost){
        const cost = 10000 // user input cost
        amount -= cost

        const ask: string = 'no' // ask user to add cost or no
        if(ask  === 'no'){
            isAddCost = false
        }
    }
    return amount
}

const resultAmount = budgetAnalysis(amount)
if(resultAmount > 0){
    console.log(`the rest of your money is ${resultAmount}`)
} else {
    console.log(`your budget is not enough ${resultAmount}`)
}

// 13) Distance Travele
function traveled (speed: number, hour: number): number{
    let result = 0
    for(let i = 1; i <= hour; i++){
        result = speed * i
        console.log(`in ${i} hour, Distance traveled is ${result}`)
    }
    return result
}

const speed = 50
const hour = 5
console.log(traveled(speed,hour))

// 14) Average Rainfall
function averageRainfall(years: number) : number{
    let totalRainfall = 0
    let countRainfall = 0
    
    for(let i = 0; i < years; i++){
        for(let month = 0; month < 12; month++){
            const rainfall = 12 // ask input number of rainfall
            totalRainfall += rainfall
            countRainfall++
        }
    }
    console.log("Total Rainfall is ", totalRainfall);
    console.log("Total month is ", countRainfall);
    
    return totalRainfall/countRainfall
}

const year = 4 //ask user input year
console.log("Average of Rainfall is ",averageRainfall(year))

// 15) Celsius to Fahrenheit Table
function convert(c: number):number{
    return 9/5 * c + 32
}

for(let i = 0; i <= 20; i++){
    console.log(`${i}C = ${convert(i)}F`)
}

// 16) Pennies for Pay
function toDollar (penny: number): number{
    return penny/100
}
function pennies (days: number):number{
    let penny = 1
    for(let i = 0; i < days; i++){
        penny *= 2
    }
    console.log("Total pennies is ", penny);
    
    const dollar = toDollar(penny)
    return dollar
}

const days = 10
console.log(`Number of dollar is ${pennies(days)}$`);

// 17) Sum of Numbers
let sum = 0
while(true){
    const number = -5 //ask user to input number
    if(number > 0){
        sum += number
    } else {
        break
    }
}

console.log("Total sum is ", sum);

// 18) Ocean Level
let resultOcean = 0
for(let i = 1; i <= 25; i++){
    const rising = 1.6 * i
    resultOcean += rising
    console.log(`In ${i} year, ocean will rising is ${resultOcean} milimeter`);
}
console.log("Ocean will rising in 25 years is ", resultOcean);


