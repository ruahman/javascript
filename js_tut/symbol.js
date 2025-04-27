import assert from "node:assert";

export function symbols() {
  // this is used to make a unique propery key for an object
  const sym = Symbol("desc");
  const obj = {
    [sym]: "value",
  };
  console.log(obj[sym]);

  // the symbol is save to a global list of symbols
  // which you can get
  // const globalSymbol = Symbol.for("foo");
  // console.log(globalSymbol);
  // console.log(obj[globalSymbol]);
}
