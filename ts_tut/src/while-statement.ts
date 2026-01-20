import assert from "node:assert";

export default function whileStatement() {
  let wcounter = 0;

  while (wcounter < 5) {
    console.log(wcounter);
    wcounter++;
  }
  assert.equal(wcounter, 5);
  // expect(wcounter).toBe(5);

  let wi = 0;

  do {
    console.log(wi);
    wi++;
  } while (wi < 10);
  assert.equal(wi, 10);
  // expect(wi).toBe(10);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("run npm run test src/while-statement.ts");
}
