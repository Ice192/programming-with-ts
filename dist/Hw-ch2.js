"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise 1
const person = {
    name: "Rais",
    address: {
        city: "Makassar",
        state: "Sulawesi",
        zip: "199876"
    },
    telphone: "0857-4546-9999",
    major: "IT Support"
};
console.log(`Hello my name is ${person.name}`);
console.log(`I live in ${person.address.city} city, ${person.address.state}, ${person.address.zip}`);
console.log(`My numbers is ${person.telphone}`);
console.log(`My major is ${person.major}`);
//Exercixe 2
function distance(time) {
    console.log(`The distance the car will travel in ${time} hours is`);
    return 70 * time;
}
console.log(distance(6));
console.log(distance(10));
console.log(distance(15));
// Exercise 3
function convert(c) {
    return 9 / 5 * c + 32;
}
console.log(`50 celcius = ${convert(50)} Farenheit`);
//Exercise 4
function Amount(principal, rate, n, year) {
    rate /= 100;
    console.log(rate);
    let interest;
    if (n === "monthly") {
        interest = 12;
    }
    else if (n === "yearly") {
        interest = 4;
    }
    else {
        throw new Error("Input yang diharuskan adalah 'monthly' atau 'yearly'");
    }
    const x = 1 + year / interest;
    const y = interest * year;
    const amount = principal * (x ** y);
    return amount;
}
try {
    const amount = Amount(50000000, 5, "monthly", 5);
    console.log(amount);
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=Hw-ch2.js.map