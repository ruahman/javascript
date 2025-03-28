import type { Expect } from "bun:test";

export default function function_overloading(expect: Expect) {
  // there is no such thing as function overloading in javascript,
  // but typescript allows us to do this

  function addo(a: number, b: number): number;
  function addo(a: string, b: string): string;
  function addo(a: any, b: any): any {
    return a + b;
  }

  expect(addo(1, 2)).toBe(3);
  expect(addo("1", "2")).toBe("12");
}
