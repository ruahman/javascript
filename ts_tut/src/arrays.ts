import assert from "node:assert";

export default function arrays() {
  const names: string[] = [];
  names.push("Diego");
  assert.ok(names.includes("Diego"));

  // readonly array, cant push to this
  const names2: readonly string[] = ["diego"];
  assert.ok(names2.includes("diego"));
  //   names2.push("andy");

  //  you can type inference an array
  const numbers = [1, 2, 3];
  numbers.push(4);
  assert.deepEqual(numbers, [1, 2, 3, 4]);

  // simple array
  const a: number[] = [1, 2, 3, 4, 5];
  a.push(66);
  assert.deepEqual(a, [1, 2, 3, 4, 5, 66]);
}
