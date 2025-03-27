import assert from "node:assert/strict";

function index(): void {
  const test: number = 22;
  console.log(test);
  console.log("hello worldxxxx");
  console.log("From index()");
  assert.equal(test, 22);
}

index();
