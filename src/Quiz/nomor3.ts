function kabisat(year: number): boolean {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 === 0) {
      return true;
    }
  }
  return false;
}

function collectKabisat(startYear: number, endYear: number) {
  let count = 0;
  for (let i = startYear; i <= endYear; i++) {
    if (kabisat(i)) {
      console.log(i);
      count++;
    }
  }
  return count;
}

console.log(collectKabisat(2000, 4000));
