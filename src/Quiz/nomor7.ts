type hasil = {
  count: number;
  maxValue: number;
};

function algorithm(num: number): hasil {
  let result = num;
  let count = 0;
  let maxValue = 0;
  while (result !== 1) {
    if (result % 2 === 0) {
      result /= 2;
    } else {
      result = result * 3 + 1;
    }
    count++;
    if (maxValue < result) {
      maxValue = result;
    }
  }
  return { count, maxValue };
}

let langkah = 0;
let maxValue = 0;
let value = 0;
for (let i = 1; i <= 1000; i++) {
  const hasil = algorithm(i);

  if (langkah < hasil.count) {
    value = i;
    langkah = hasil.count;
    maxValue = hasil.maxValue;
  }
}

console.log(
  `Dari 1 - 1000 yang memberikan langkah terbanyak adalah ${value} dengan ${langkah} langkah dan ${maxValue} hasil terbesar yang dihasilkan`,
);
