// setup function type
let addtype: (x: number, y: number) => number;

addtype = (x: number, y: number): number => {
  return x + y;
};

console.log(addtype(1, 2));
