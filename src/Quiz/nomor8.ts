import fs from "fs";
import { question } from "readline-sync";

class Character {
  name: string;
  hp: number;
  armor: number;
  attack: number;

  constructor(name: string) {
    this.name = name;
    this.hp = 90 + Math.floor(Math.random() * 30);
    this.armor = Math.floor(Math.random() * 6);
    this.attack = 10 + Math.floor(Math.random() * 15);
  }
}

const first_name = fs.readFileSync("files/first_name.txt", "utf8");
const last_name = fs.readFileSync("files/last_name.txt", "utf8");

function split(text: string) {
  let word = "";
  let result = [];

  for (const x of text) {
    if (x === "\n") {
      result.push(word);
      word = "";
    } else {
      word += x;
    }
  }
  if (word !== "") {
    result.push(word);
  }
  return result;
}
const group_first = split(first_name);
const group_last = split(last_name);

console.log(group_first);

const fullName = [];

for (let i = 0; i < group_first.length; i++) {
  fullName.push(`${group_first[i]} ${group_last[i]}`);
}

const input_name = question("Masukkan nama : ");
const pick = fullName[Math.floor(Math.random() * fullName.length)];
if (pick === undefined) {
  throw new Error("Invalid Undefined Value");
}

const you = new Character(input_name);
const enemy = new Character(pick);

function turn(player: Character, attacker: Character): Character {
  const dice = Math.floor(Math.random() * 6) + 1;
  console.log(attacker.name, "Turn");
  console.log(`Roll: ${dice}`);

  if (dice === 6) {
    const your_attack = attacker.attack * 2;
    player.hp -= your_attack;
    player.armor--;

    console.log(`Attack multiplied by x2, shread 1 armor after attack`);
    console.log(`Your attack: ${your_attack}`);
  } else {
    const multiplay = 1 + dice / 10;
    const your_attack = Math.round(attacker.attack * multiplay);
    player.hp -= your_attack;
    console.log(`Attack multiplied by ${multiplay}`);
    console.log(`Your attack: ${your_attack}`);
  }
  return player;
}

function print() {
  console.log(enemy.name);
  console.log(
    `HP: ${enemy.hp}, Armor: ${enemy.armor}, Attack: ${enemy.attack}`,
  );
  console.log("vs");
  console.log(you.name);
  console.log(`HP: ${you.hp}, Armor: ${you.armor}, Attack: ${you.attack}`);
  console.log(`-----------------------------------------------`);
}
print();

let start = true;
let youTurn = true;
while (start) {
  if (youTurn) {
    turn(enemy, you);
    youTurn = false;
  } else {
    turn(you, enemy);
    youTurn = true;
  }
  print();
  if (you.hp < 0 || you.armor < 0) {
    console.log(enemy.name, "Win");
    start = false;
  } else if (enemy.hp < 0 || enemy.armor < 0) {
    console.log(you.name, "Win");
    start = false;
  }
}
