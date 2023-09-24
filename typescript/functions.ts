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
function pow(value: number, exponent: number = 10): number {
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

// this just delares a function without implementation
declare function search(query: string, tags: string[]): Result;
