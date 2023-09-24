// setup function type
let addtype: (x: number, y: number) => number;

addtype = (x: number, y: number): number => {
  return x + y;
};

console.log(addtype(1, 2));

// setup function type with alias
type Add = (x: number, y: number) => number;

let addtype2: Add = (x: number, y: number): number => {
  return x + y;
};
