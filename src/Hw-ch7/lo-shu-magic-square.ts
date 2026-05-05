import { question } from "readline-sync"

const grid: number[][] = []

// Mengisi Grid 3x3
for(let i = 0; i < 3; i++){
    const row = []
    for(let j = 0; j < 3; j++){
        const input = question(`Input angka di baris[${i}], kolom[${j}] : `)
        const num = Number(input)

        row.push(num)
    }
    grid.push(row)
}

// Mengecek duplikat
function isThere (numbers: number[], number: number): boolean{
    for(const angka of numbers){
        if(angka === number){
            return true
        }
    }
    return false
}

// Memvalidasi grid
function isValid(numbers:number[][]): boolean {
    const collect: number[] = []
    for(const number of numbers){
        for(const angka of number){
            if(!isThere(collect,angka)){
                if(angka > 0 && angka < 10){
                    collect.push(angka)
                } else {
                    console.log("Diluar angka 1-9 atau bukan angka");
                    return false   
                }
            } else {
                console.log("Duplicate"); 
                return false
            }
        }
    }
    return true
}

// Menghitung jumlah dari baris
function checkRow (target:number, grid: number[][]): boolean{
        for(let i = 0; i < grid.length; i++){
            const row = grid[i]
            if(row === undefined){
                throw new Error("Invalid")
            }
            if(row[0] === undefined || row[1] === undefined || row[2] === undefined){
                throw new Error("Invalid")
            }
            const sum = row[0] + row[1] + row[2]

            if(target !== sum){
                return false
            }
        }
        return true
    }

// Menghitung jumlah dari kolom
function checkColumn (target: number, grid: number[][]): boolean{
        for(let i = 0; i < grid.length; i++){
        if(grid[0] === undefined || grid[1] === undefined || grid[2] === undefined){
            throw new Error("Invalid")
        }
        const num = grid[0][i]
        const num1 = grid[1][i]
        const num2 = grid[2][i]

        if (
            num === undefined ||
            num1 === undefined ||
            num2 === undefined
        ) {
            throw new Error("Invalid")
        }

        const sum = num + num1 + num2

        if (sum !== target) {
            return false
         }
        }
    return true
}

// Menghitung jumlah dari diagonal
function checkDiagonal (target: number, grid: number[][]): boolean{
    let first_diagonal = 0
    let second_diagonal = 0
    for(let i = 0; i < grid.length; i++){
        const row = grid[i]
        if(row === undefined){
            throw new Error("Invalid")
        }
        const value = row[i]

        if(value === undefined){
            throw new Error("Invalid")
        }
        first_diagonal += value
    }

    for(let i = 0; i < grid.length; i++){
        const row = grid[i]
        if(row === undefined){
            throw new Error("Invalid")
        }
        const value = row[(grid.length-1) - i]

        if(value === undefined){
            throw new Error("Invalid")
        }
        second_diagonal += value
    }

    if(first_diagonal !== target || second_diagonal !== target){
        return false
    }
    return true
}

if(isValid(grid)){
    if(grid[0] === undefined){
        throw new Error("Invalid")
    }
    if(grid[0][0] === undefined || grid[0][1] === undefined || grid[0][2] === undefined){
        throw new Error("Invalid")
    } 
    const sum_target = grid[0][0] + grid[0][1] + grid[0][2]

    if(checkRow(sum_target,grid) && checkColumn(sum_target,grid) && checkDiagonal(sum_target,grid)){
        for(const row of grid){
            console.log(row);    
        }
        console.log("Magic Square");
    } else {
        for(const row of grid){
            console.log(row);
        }
        console.log("Not Magic Square");
        
    }
}



    


