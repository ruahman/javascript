export function iterators() {
  class CountDown {
    constructor(start) {
      this.start = start;
    }

    // an iterator must implement this property
    [Symbol.iterator]() {
      let current = this.start;

      // returns an iterator object
      return {
        next() {
          if (current >= 0) {
            return { value: current--, done: false };
          }

          return { value: undefined, done: true };
        },
      };
    }
  }

  const countdown = new CountDown(5);

  for (const number of countdown) {
    console.log(number);
  }
}
