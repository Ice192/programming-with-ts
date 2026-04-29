const readline = require("readline-sync");
// 10) Bug Collector
function bugCollector () : number {
    let result = 0
    for(let i = 0; i < 5; i++){
        const bug:number = readline.question("Number of bug: ")
        console.log(typeof bug)
        const numBug = Number(bug)
        result += numBug
    }
    return result
}

console.log("Total bug is ",bugCollector());