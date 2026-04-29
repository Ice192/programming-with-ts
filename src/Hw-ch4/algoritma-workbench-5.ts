// 5) Algoritma WorkBench
let hasil = 0
let j = 30
for(let i = 1; i <= 30; i++){
    console.log(`${i}/${j}`)
    hasil += i / j
    j--
}
console.log("Hasilnya adalah " + hasil);