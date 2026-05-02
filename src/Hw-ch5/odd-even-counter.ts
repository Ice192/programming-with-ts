function isOdd (num:number): boolean {
    if(num%2 === 0){
        return false
    } else {
        return true
    }
}

for(let i = 0; i < 100; i++){
    let oddCounter = 0
    let evenCounter = 0
    const number = Math.floor(Math.random()* 100 ) + 1

    if(isOdd(number)){
        oddCounter++
        console.log(`${number} is Odd`);
        
    } else {
        evenCounter++
        console.log(`${number} is Even`);
    }
}