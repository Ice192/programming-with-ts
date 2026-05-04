const lottery_number = []

for(let i = 0; i < 7;i++){
    const num = Math.floor(Math.random() * 10)

    lottery_number.push(num)
}

for(const number of lottery_number){
    console.log(number);
    
}