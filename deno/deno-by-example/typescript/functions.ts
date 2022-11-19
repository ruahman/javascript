// return type
function addNum(x: number, y: number): number {
  return x + y;
}

// void return type
function log(message: string | number): void {
  console.log(message);
}

// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

// default params
function pow(value: number, exponent = 10): number {
  return value ** exponent;
}

// rest paramiters
function add2(a: number, b: number, ...rest: number[]): number {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

// function alias
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

// named parameters
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}

export default function demo() {
  console.log("***** functions *****");
  const res = addNum(1, 2);
  console.log(res);
  log("try me");
  log(123);
  log(add(4, 5));
  log(pow(4, 3));
  console.log(add2(1, 2, 3, 4, 5, 6));
  console.log(negateFunction(5));
  console.log(divide({ dividend: 10, divisor: 2 }));
}
