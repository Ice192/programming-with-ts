// Exercise 1
const person: {
    name: string,
    address: {
        city: string,
        state: string,
        zip: string
    },
    telphone: string,
    major: string
} = {
    name: "Rais",
    address:{
        city: "Makassar",
        state: "Sulawesi",
        zip: "199876"
    },
    telphone: "0857-4546-9999",
    major: "IT Support"
}

    console.log(`Hello my name is ${person.name}`);
    console.log(`I live in ${person.address.city} city, ${person.address.state}, ${person.address.zip}`);
    console.log(`My numbers is ${person.telphone}`);
    console.log(`My major is ${person.major}`);