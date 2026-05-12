const lisan: { [key: number]: string } = {
  0: "",
  1: "satu",
  2: "dua",
  3: "tiga",
  4: "empat",
  5: "lima",
  6: "enam",
  7: "tujuh",
  8: "delapan",
  9: "sembilan",
  10: "sepuluh",
  11: "sebelas",
};

function convert(num: number): string {
  if (num <= 11) {
    if (lisan[num] === undefined) {
      return "";
    }
    return lisan[num];
  }

  if (num < 20) {
    return convert(num % 10) + " belas";
  }

  if (num < 100) {
    const puluhan = Math.floor(num / 10);
    const satuan = num % 10;

    let hasil = convert(puluhan) + " puluh";

    if (satuan !== 0) {
      hasil += " " + convert(satuan);
    }

    return hasil;
  }

  if (num < 200) {
    return "seratus " + convert(num - 100);
  }

  if (num < 1000) {
    const ratusan = Math.floor(num / 100);
    const sisa = num % 100;

    let hasil = convert(ratusan) + " ratus";

    if (sisa !== 0) {
      hasil += " " + convert(sisa);
    }

    return hasil;
  }

  if (num < 2000) {
    return "seribu " + convert(num - 1000);
  }

  if (num < 1000000) {
    const ribuan = Math.floor(num / 1000);
    const sisa = num % 1000;

    let hasil = convert(ribuan) + " ribu";

    if (sisa !== 0) {
      hasil += " " + convert(sisa);
    }

    return hasil;
  }

  if (num <= 100000000) {
    const jutaan = Math.floor(num / 1000000);
    const sisa = num % 1000000;

    let hasil = convert(jutaan) + " juta";

    if (sisa !== 0) {
      hasil += " " + convert(sisa);
    }

    return hasil;
  }

  return "Angka terlalu besar";
}

console.log(convert(5));
console.log(convert(17));
console.log(convert(45));
console.log(convert(245));
console.log(convert(1245));
console.log(convert(100000000));
console.log(convert(123456789));
