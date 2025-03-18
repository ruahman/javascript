import { expect, test } from "bun:test";

function index(): void {
  const test: number = 22;
  console.log(test);
  console.log("hello world");
  console.log("From index()");
  expect(2 + 2).toBe(4);
}

index();
