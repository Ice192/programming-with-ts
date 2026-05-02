function isOdd (num:number): boolean {
    if(num%2 === 0){
        return false
    } else {
        return true
    }
}
let oddCounter = 0
let evenCounter = 0
for(let i = 0; i < 100; i++){
    
    const number = Math.floor(Math.random()* 100 ) + 1

    if(isOdd(number)){
        oddCounter++
        console.log(`${number} is Odd`);
        
    } else {
        evenCounter++
        console.log(`${number} is Even`);
    }
}

console.log("Total odd number: ",oddCounter);
console.log("Total even number: ",evenCounter);
