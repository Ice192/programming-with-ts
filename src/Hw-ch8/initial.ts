
// const first = "Jhon"
// const second = "William"
// const last = "Smith"

// console.log(`${first} ${second} ${last}`);
// console.log(`Initial ${first[0]}.${second[0]}.${last[0]}.`);


const fullName = "Jhon William Smith"
const name = fullName.split(" ")

const first = name[0]
const second = name[1]
const last = name[2]

if(first === undefined || second === undefined || last === undefined){
    throw new Error("Nama tidak Lengkap")
}

console.log(fullName);
console.log(`Initial ${first[0]}.${second[0]}.${last[0]}.`);
