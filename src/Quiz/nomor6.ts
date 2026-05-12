import fs from "fs";

interface Stone {
  id: string;
  name: string;
  weight_kg: number;
  value_idr: number;
  used?: boolean;
}

const data = fs.readFileSync("files/stones.json", "utf8");

const stones: Stone[] = JSON.parse(data);

const capacity: number = 10000;

let currentWeight: number = 0;
let totalProfit: number = 0;

const collect: Stone[] = [];

while (true) {
  let bestStone: Stone | null = null;

  let bestProfit: number = 0;

  // cari batu terbaik
  for (const stone of stones) {
    if (stone.used) {
      continue;
    }

    const profit = stone.value_idr / stone.weight_kg;

    if (profit > bestProfit) {
      bestProfit = profit;

      bestStone = stone;
    }
  }

  // tidak ada batu tersisa
  if (!bestStone) {
    break;
  }

  // cek kapasitas
  if (currentWeight + bestStone.weight_kg <= capacity) {
    collect.push(bestStone);

    currentWeight += bestStone.weight_kg;

    totalProfit += bestStone.value_idr;
  }

  // tandai sudah dipakai
  bestStone.used = true;
}

for (const stone of collect) {
  console.log(`${stone.id} - ${stone.name} | ${stone.weight_kg}kg`);
}

console.log("\nTotal Berat:", currentWeight);

console.log("Total Profit:", totalProfit);
