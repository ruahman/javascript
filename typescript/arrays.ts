import { Expect } from "bun:test";

export default function arrays(expect: Expect) {
  const names: string[] = [];
  names.push("Diego");
  expect(names).toContain("Diego");

  // readonly array, cant push to this
  const names2: readonly string[] = ["diego"];
  expect(names2).toContain("diego");
  //   names2.push("andy");

  //  you can type inference an array
  const numbers = [1, 2, 3];
  numbers.push(4);
  expect(numbers).toEqual([1, 2, 3, 4]);

  // simple array
  const a: number[] = [1, 2, 3, 4, 5];
  a.push(66);
  expect(a).toEqual([1, 2, 3, 4, 5, 66]);
}
