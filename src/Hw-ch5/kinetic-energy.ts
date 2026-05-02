import { question } from "readline-sync"

function kinetic_energy (mass: number, velocity: number): number{
    return 1/2 * mass * velocity ** 2
}

const inputMass = question("Input mass object : ")
const inputVelocity = question("Input velocity object : ")

const mass = Number(inputMass)
const velocity = Number(inputVelocity)

if(!isNaN(mass) && !isNaN(velocity)){
    const kinetic = kinetic_energy(mass,velocity)
    console.log(`Kinetic Energy of object is ${kinetic}`); 
} else{
    throw new Error("Input should be Number")
}