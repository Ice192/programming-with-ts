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