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
function add(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

// default parameters
function pow(value: number, exponent: number = 10): number {
  return value ** exponent;
}

function devide(
  { dividen, divisor }: { dividen: number; divisor: number },
): number {
  return dividen / divisor;
}

function addRest(a: number, b: number, ...rest: number[]): number {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

export default function functions() {
  console.log("**** functions ****");
  console.log(getTime());
  console.log(printHello());
  console.log(multiply(2, 3));
  console.log(add(2, 3));
  console.log(pow(2, 8));
  console.log(addRest(1, 2, 3, 4, 5, 6, 7, 8, 9));
}
