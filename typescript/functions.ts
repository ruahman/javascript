function getTime(): number {
  return new Date().getTime();
}

function printHello(): void {
  console.log("void");
}

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
