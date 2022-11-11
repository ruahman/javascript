function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

export default function demo() {
  console.log("***** functions *****");
  const res = addNum(1, 2);
  console.log(res);
  log("try me");
  log(123);
}
