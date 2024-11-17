export default function function_type(expect: any) {
  // setup function type
  let addtype: (x: number, y: number) => number;

  addtype = (x: number, y: number): number => {
    return x + y;
  };

  expect(addtype(1, 2)).toBe(3);

  // setup function type with alias
  type Add = (x: number, y: number) => number;

  let addtype2: Add = (x: number, y: number): number => {
    return x + y;
  };

  expect(addtype2(1, 2)).toBe(3);
}
