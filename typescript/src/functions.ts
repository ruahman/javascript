import { expect } from "bun:test";

// this just delares a function without implementation
declare function search(query: string, tags: string[]);

export default function functions() {
  // simple function
  function add_test(a: number, b: number): number {
    return a + b;
  }

  type MyFunction = (a: number, b: number) => number;
  const add: MyFunction = (a, b) => a + b;
  expect(add(3, 4)).toBe(7);

  type MyFunctionInterface = (a: number, b: number) => number;
  const add2: MyFunctionInterface = (a, b) => a + b;
  expect(add2(3, 4)).toBe(7);

  // specify the return type
  function getTime(): number {
    return new Date().getTime();
  }

  // void return type
  function printHello(): void {
    console.log("void");
  }

  // specify the parameter types
  function multiply(a: number, b: number): number {
    return a * b;
  }

  // optional parameters
  function addx(a: number, b: number, c?: number): number {
    return a + b + (c || 0);
  }

  // default parameters
  function pow(value: number, exponent = 10): number {
    return value ** exponent;
  }

  function devide({
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

  type Result = {
    title: string;
    url: string;
  };

  // declare function search(query: string, tags: string[]): Result;

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

  const loop = function forever(): never {
    while (true) {
      console.log("Hello");
    }
  };
}
