import fs from "fs";

const pangram = fs.readFileSync("files/pangram_test_set.txt", "utf8");
const alphabet: { [key: string]: boolean } = {
  a: true,
  b: true,
  c: true,
  d: true,
  e: true,
  f: true,
  g: true,
  h: true,
  i: true,
  j: true,
  k: true,
  l: true,
  m: true,
  n: true,
  o: true,
  p: true,
  q: true,
  r: true,
  s: true,
  t: true,
  u: true,
  v: true,
  w: true,
  x: true,
  y: true,
  z: true,
};

function split(text: string): string[] {
  const result = [];

  let word = "";

  for (const char of text) {
    if (char !== "\n") {
      word += char;
    } else {
      result.push(word);
      word = "";
    }
  }

  if (word !== "") {
    result.push(word);
  }

  return result;
}

function toLower(text: string): string {
  let result = "";

  const lower = "abcdefghijklmnopqrstuvwxyz";
  const higher = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (const char of text) {
    let current = char;

    for (let i = 0; i < higher.length; i++) {
      if (char === higher[i]) {
        const kecil = lower[i];
        if (kecil === undefined) {
          throw new Error("Invalid Undefined");
        }
        current = kecil;

        break;
      }
    }

    result += current;
  }

  return result;
}

function isThere(char: string): boolean {
  if (alphabet[char]) {
    return true;
  }
  return false;
}

function isPangram(text: string): boolean {
  let total = 0;
  const found: { [key: string]: boolean } = {};
  const lower_text = toLower(text);
  for (const char of lower_text) {
    if (isThere(char)) {
      if (!found[char]) {
        found[char] = true;
        total++;
      }
    }
  }

  if (total === 26) {
    return true;
  }

  return false;
}

const lines = split(pangram);

for (const line of lines) {
  console.log(line);

  if (isPangram(line)) {
    console.log("Pangram");
  } else {
    console.log("Bukan Pangram");
  }
}
