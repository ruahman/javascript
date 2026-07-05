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

  assert.equal(circ(33), 33 * Math.PI);

  const result = add(2, 3);
  assert.equal(result, 5);

  // make a function type
  type MyFunction = (a: number, b: number) => number;
  const addMyFunc: MyFunction = (a, b) => a + b;
  assert.equal(addMyFunc(3, 4), 7);

  // specify the return type
  function getTime(): number {
    return new Date().getTime();
  }

  // void returns nothing
  function printHello(): void {
    console.log("void");
  }

  // optional parameters
  function addx(a: number, b: number, c?: number): number {
    // if c is not provided, default to 0
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

  // rest parameters
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

  // never function never returns because it always throws an exception or infinite loop
  function raiseError(message: string): never {
    throw new Error(message);
  }

  function forever(): never {
    while (true) {
      console.log("Hello");
    }
  }

  // overloading
  function getItemLength(name: string): number;
  function getItemLength(name: string[]): number;
  function getItemLength(name: unknown): number {
    if (Array.isArray(name)) {
      return name.length;

    }
    else if(typeof name == "string") {
      return name.length;
    }

    return 0;
  }




}
