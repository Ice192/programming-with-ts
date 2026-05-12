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

  const found: string[] = [];
  const lower_text = toLower(text);
  for (const char of lower_text) {
    // cek apakah huruf alfabet
    if (isThere(char, alphabet)) {
      // simpan jika belum ada
      if (!isThere(char, found)) {
        found.push(char);
      }
    }
  }

  if (found.length === 26) {
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
