class Person {
    private name: string
    private addresses: string
    private age: number
    private phone_number: string

        constructor(name: string, addresses: string, age: number, phone: string){
            this.name = name
            this.addresses = addresses
            this.age = age
            this.phone_number = phone
        }

    set_name(name: string){
            this.name = name
    }

    set_addresses(addresses: string){
            this.addresses = addresses
    }

    set_age(age: number){
            this.age = age
    }

    set_phone(phone: string){
            this.phone_number = phone
    }

    get_personal(){
        console.log(this.name);
        console.log(this.addresses);
        console.log(this.age);
        console.log(this.phone_number);
    }
}

const you = new Person("Rais","Daya", 25, "000000888888")
const oval = new Person("Oval","BTP", 29, "004400888888")
const rahman = new Person("Rahman","Mannuruki", 26, "00440000888888")

you.get_personal()

you.set_name("Muhammad Rais")

// you.name = "Muhammad Rais" 
// console.log(you.name)
// Bakal Error karena property private yang artinya hanya bisa diakses dan dimodifikasi didalam class

you.get_personal()
oval.get_personal()
rahman.get_personal()
