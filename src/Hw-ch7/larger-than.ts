function largerThan (arr: number[], n: number): number[]{
    const result = []
    for(const number of arr){
        if(number > n){
            result.push(number)
        }
    }
    return result
}

const numbers = [4,6,9,4,7,11,9,16]
const n = 2

console.log(largerThan(numbers,n));
