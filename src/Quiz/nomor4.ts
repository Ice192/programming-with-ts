import fs from "fs";

const pangram = fs.readFileSync("files/pangram_test_set.txt", "utf8");

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

  const lower: { [key: string]: string } = {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
    g: "G",
    h: "H",
    i: "i",
    j: "J",
    k: "K",
    l: "L",
    m: "M",
    n: "N",
    o: "O",
    p: "P",
    q: "Q",
    r: "R",
    s: "S",
    t: "T",
    u: "U",
    v: "V",
    w: "W",
    x: "X",
    y: "Y",
    z: "Z",
  };

  for (const char of text) {
    let current = char;

    for (const low in lower) {
      if (char === lower[low]) {
        current = low;
        break;
      }
    }

    result += current;
  }

  return result;
}

function isThere(char: string, alphabet: string | string[]): boolean {
  for (const x of alphabet) {
    if (char === x) {
      return true;
    }
  }
  return false;
}

function isPangram(text: string): boolean {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let total = 0;
  const found: { [key: string]: boolean } = {};
  const lower_text = toLower(text);
  for (const char of lower_text) {
    if (isThere(char, alphabet)) {
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
