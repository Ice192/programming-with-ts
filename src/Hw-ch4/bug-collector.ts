import { question } from "readline-sync"

// 10) Bug Collector
function bugCollector () : number {
    let result = 0
    for(let i = 0; i < 5; i++){
        const bug = question("Number of bug: ")
        const numBug = Number(bug)
        if(!isNaN(numBug)){
            result += numBug
        }
    }
    return result
}

console.log("Total bug is ",bugCollector());