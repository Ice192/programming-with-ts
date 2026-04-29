// 1) Algoritma Workbench
function firstLoop (num: number): number{
    return num * 10
}
let iteration = 1
while(iteration > 0){
    if(firstLoop(iteration) > 100){
        break
    }
    console.log(firstLoop(iteration))
    iteration++
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
