// optional must always be at the end
function multiplyo(a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}

let reso = multiplyo(1, 2, 3);
console.log(reso);
