class Car {
    year_model: string
    make: string
    speed: number

        constructor(year_model: string, make: string, speed: number){
            this.year_model = year_model
            this.make = make
            this.speed = speed
        }
    
        accelerate(){
            this.speed += 5
        }

        brake(){
            this.speed -= 5
        }

        get_speed(){
            return `You current speed is ${this.speed}`
        }
}

const car = new Car("2026", "Tesla", 200)

car.accelerate()
car.accelerate()
car.accelerate()
car.accelerate()
car.accelerate()
console.log(car.get_speed())
car.brake()
car.brake()
car.brake()
car.brake()
car.brake()
console.log(car.get_speed())