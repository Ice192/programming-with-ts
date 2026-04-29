// 18) Ocean Level
let resultOcean = 0
for(let i = 1; i <= 25; i++){
    const rising = 1.6 * i
    resultOcean += rising
    console.log(`In ${i} year, ocean will rising is ${resultOcean} milimeter`);
}
console.log("Ocean will rising in 25 years is ", resultOcean);