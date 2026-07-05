import assert from "node:assert/strict";

export default function function_type() {
  // setup function type
  let addtype: (x: number, y: number) => number;

  addtype = (x: number, y: number): number => {
    return x + y;
  };

  // expect(addtype(1, 2)).toBe(3);
  assert.equal(addtype(1, 2), 3);

  // setup function type with alias
  type Add = (x: number, y: number) => number;

  const addtype2: Add = (x: number, y: number): number => {
    return x + y;
  };

  // expect(addtype2(1, 2)).toBe(3);
  assert.equal(addtype2(1, 2), 3);
}
