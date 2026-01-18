import assert from "node:assert";

// this provides type information for function
type Result = {
  title: string;
  url: string;
};

declare function search(query: string, tags: string[]): Result;

function add(a: number, b: number): number {
  return a + b;
}

export default function functions() {
  const circ = (diameter: number) => {
    return diameter * Math.PI;
  };

  console.log(circ(33));

  const result = add(2, 3);
  assert.strictEqual(result, 5);

  type MyFunction = (a: number, b: number) => number;
  const addMyFunc: MyFunction = (a, b) => a + b;
  assert.strictEqual(addMyFunc(3, 4), 7);

  // specify the return type
  function getTime(): number {
    return new Date().getTime();
  }

  // void return type
  function printHello(): void {
    console.log("void");
  }

  // optional parameters
  function addx(a: number, b: number, c?: number): number {
    return a + b + (c || 0);
  }

  // default parameters
  function pow(value: number, exponent = 10): number {
    return value ** exponent;
  }

  // parameter deconsruct
  function divide({
    dividen,
    divisor,
  }: {
    dividen: number;
    divisor: number;
  }): number {
    return dividen / divisor;
  }

  function addRest(a: number, b: number, ...rest: number[]): number {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }

  // deconstruct objects
  // here is how I can type anotate when I deconstruct an object
  const logWeather = ({
    date,
    weather,
  }: {
    date: Date;
    weather: string;
  }): void => {
    console.log(date);
    console.log(weather);
  };

  // void
  // this is just for void fuctions
  function log(message: string): void {
    console.log(message);
  }

  // never
  // function never returns because it throws an exception or infinite loop
  function raiseError(message: string): never {
    throw new Error(message);
  }

  function forever(): never {
    while (true) {
      console.log("Hello");
    }
  }
}
