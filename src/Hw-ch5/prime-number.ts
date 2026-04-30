// Prime Number
function is_prime(num: number): boolean{
    let prime = true
    if(num <= 1){
        prime = false
    }
    for(let i = 2; i < num;i++){
        if(num % i === 0){
            prime = false
        } 
    }
    return prime
}

// List Prime Number
for(let i = 1; i <= 100;i++){
    if(is_prime(i)){
        console.log(i)
    }
}
