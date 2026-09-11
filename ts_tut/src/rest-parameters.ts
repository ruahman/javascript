export default function rest(...numbers: number[]): number {
  console.log("***** rest parameters *****");

  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}

import { fileURLToPath } from "node:url";
import path from "node:path";

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  rest();
}
