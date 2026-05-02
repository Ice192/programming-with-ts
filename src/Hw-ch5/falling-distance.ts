function falling_distance (time: number) : number {
    const g = 9.8

    const distance = 1/2 * g * time ** 2
    return distance
}

for(let i = 1; i <= 10; i++){
    const distance = falling_distance(i)
    console.log(`In ${i} seconds, the distance is ${distance}`)
}