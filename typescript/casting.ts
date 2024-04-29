import { Expect } from "bun:test";

export default function casting(expect: Expect) {
  // as
  const q: unknown = "hello world";
  expect(q as string).toBeTypeOf("string");

  // <>
  const w: unknown = "hello world2";
  expect(<string>w).toBeTypeOf("string");
}
