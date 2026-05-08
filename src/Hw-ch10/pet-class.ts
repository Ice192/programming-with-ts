import { log } from "node:console"

class Pet{
    name?: string
    animal_type?: string
    age?: number

    // constructor(name:string, animal_type:string, age:number){
    //     this.name = name
    //     this.animal_type = animal_type
    //     this.age = age
    // }

    set_name(pet_name: string){
        this.name = pet_name
    }

    set_animal_type(type: string){
        this.animal_type = type
    }

    set_age(age: number){
        this.age = age
    }

    get_name(){
        return `${this.name}`
    }

    get_animal_type(){
        return `${this.animal_type}`
    }

    get_age(){
        return `${this.age} years`
    }
}

const cat = new Pet()

console.log(cat.get_name()); // Henry
console.log(cat.get_animal_type()); // Cat
console.log(cat.get_age()); // 5

cat.set_name("Antony")
cat.set_animal_type("Dog")
cat.set_age(10)

console.log(cat.get_name()); // Antony
console.log(cat.get_animal_type()); // Dog
console.log(cat.get_age()); // 10
