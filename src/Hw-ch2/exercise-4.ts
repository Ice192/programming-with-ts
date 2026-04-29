//Exercise 4
function Amount(principal: number, rate:number , n:string, year:number) : number {
    rate /= 100
    console.log(rate);
    
    let interest
    if(n === "monthly"){
        interest = 12
    } else if(n === "yearly"){
        interest = 4
    } else {
        throw new Error ("Input yang diharuskan adalah 'monthly' atau 'yearly'")
    }
    const x = 1 + year/interest
    const y = interest * year
    const amount = principal * (x**y) 
    return amount
}

try {
    const amount = Amount(50000000, 5, "monthly", 5 )
console.log(amount)
} catch (error) {
    console.log(error)
}
