import { expect } from "bun:test";

export default function whileStatement() {
  let wcounter = 0;

  while (wcounter < 5) {
    console.log(wcounter);
    wcounter++;
  }
  expect(wcounter).toBe(5);

  let wi = 0;

  do {
    console.log(wi);
    wi++;
  } while (wi < 10);
  expect(wi).toBe(10);
}
