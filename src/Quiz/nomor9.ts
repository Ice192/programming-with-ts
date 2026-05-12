class LIFO {
  stack: number[];

  constructor() {
    this.stack = [];
  }

  insert(num: number) {
    this.stack.push(num);
  }

  intip() {
    return this.stack[this.stack.length - 1];
  }

  ukuran() {
    return this.stack.length;
  }

  out() {
    return this.stack.splice(this.stack.length - 1);
  }

  kosong() {
    if (this.stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const lifo = new LIFO();

console.log(lifo.kosong());
lifo.insert(10);
lifo.insert(20);
lifo.insert(30);

console.log(lifo.intip());
console.log(lifo.ukuran());

console.log(lifo.out());
console.log(lifo.out());

console.log(lifo.intip());
console.log(lifo.ukuran());

console.log(lifo.kosong());

console.log(lifo.out());
console.log(lifo.kosong());
