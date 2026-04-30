let print = ''
for(let i = 0; i < 7; i++){
    for(let j = 7 - i; j > 0; j--){
        print += '*'
    }
    print += '\n'
}
console.log(print)

let print2 = ''
for(let i = 0; i < 6; i++){
    print2 += '#'
    for(let j = 0; j < i; j++){
        print2 += " "
    }
    print2 += '#\n'
}
console.log(print2);
