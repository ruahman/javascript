export function generators() {
  function* generate() {
    console.log("A");
    yield 1;
    console.log("B");
    yield 2;
    console.log("C");
  }
  const g = generate();
  g.next();
  g.next();
  g.next();

  class CountDown {
    #start;
    constructor(start) {
      this.#start = start;
    }

    *[Symbol.iterator]() {
      for (let i = this.#start; i >= 0; i--) {
        yield i;
      }
    }
  }
  let countdown = new CountDown(10);
  for (const number of countdown) {
    console.log(number);
  }

  async function* asyncGenerator() {
    // these can be fetch calls
    yield "a";
    yield "b";
    yield "c";
  }

  async function start() {
    for await (const value of asyncGenerator()) {
      console.log("asyncGenerator ", value);
    }
  }
  start();
}
