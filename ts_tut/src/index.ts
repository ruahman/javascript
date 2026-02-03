import assert from "node:assert";

export default function (): void {
  const test: number = 22;
  console.log(test);
  console.log("hello worldxxxx");
  console.log("From index()");
  assert.equal(test, 22);
}
