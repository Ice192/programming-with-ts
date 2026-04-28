//Exercise 1 - Day of the Week
function Week (day: number) : string {
    switch (day) {
        case 1:
            return 'This is Monday'
            break;
        case 2:
            return 'This is Tuesday'
            break;
        case 3:
            return 'This is Wednesday'
            break;
        case 4:
            return 'This is Thursday '
            break;
        case 5:
            return 'This is Friday'
            break;
        case 6:
            return 'This is Saturday'
            break;
        case 7:
            return 'This is Sunday'
            break;
        default:
            throw new Error('Input diluar range input 1 - 7')
            break;
    }
}

try {
    console.log(Week(8))
} catch (error) {
    console.log(error)
}

// Exercise 2 - Roulette Wheel Colors
function isOdd (number: number, reverse: boolean) : string {
    if (reverse){
        if(number % 2 === 0){
        return `pocket ${number} are red`
    } else {
        return `pocket ${number} are black`
    }
    } else {
        if(number % 2 === 0){
        return `pocket ${number} are black`
    } else {
        return `pocket ${number} are red`
    }
    }
    
}
function roulatte () {
    for(let i = 0; i < 37; i++ ){
        if(i === 0){
            console.log(`pocket ${i} is Green`)
        } else if (i <= 10){
            console.log(isOdd(i, false))
        } else if (i <= 18){
            console.log(isOdd(i, true))
        }  else if (i <= 28){
            console.log(isOdd(i, false))
        } else if (i <= 36){
            console.log(isOdd(i, true))
        }
    }
}
roulatte()

//Exercise 3 - Shipping Charges
function shippingCharges (weight: number) :number{
    if(weight <= 2){
        return 1.5 * weight
    } else if(weight <= 6){
        return 3 * weight
    } else if(weight <= 10){
        return 4 * weight
    } else {
        return 4.75 * weight
    }
}
const weight = 10
console.log(`Shipping charges with ${weight} pounds is ${shippingCharges(weight)}$`)

//Exercise 4 - Restourant Selector
function restourantSelector (vegetarian: boolean, vegan: boolean, gluten: boolean): string{
    if(vegetarian && vegan && gluten){
        return "The Chef's Kitchen & Corner Cafe"
    } else if(!vegetarian && !vegan && !gluten){
        return "Joe's Gourmet Burgers"
    } else if(vegetarian && !vegan && gluten){
        return "Main Street Pizza Kompany"
    } else if(!vegetarian && vegan && gluten){
        return "Mama Fine's Italian"
    } else {
        return 'None'
    }
}

const vegetarian = true
const vegan = false
const gluten = false

console.log(restourantSelector(vegetarian,vegan,gluten))