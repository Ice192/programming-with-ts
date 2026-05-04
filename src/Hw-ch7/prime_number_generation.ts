import { question } from "readline-sync";

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

const input = question("Enter positive number : ")
const number = Number(input)

if(number > 0){
    console.log("Prime number:");

    for(let i = 1; i < number; i++){
        if(is_prime(i)){
            console.log(i);
            
        }
    }
} else {
    console.log("Input should number and positive"); 
}


