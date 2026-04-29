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