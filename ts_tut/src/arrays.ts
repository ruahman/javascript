import assert from "node:assert";

// an array is a collection of values of the same type

export default function arrays() {
  console.log("***** arrays *****");

  // you can push later to an array
  const names: string[] = [];
  names.push("Diego");
  assert.ok(names.includes("Diego"));

  // read only array, can't push to this
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

  // the all items in array must be of the same type
  // a.push("66");
  assert.deepEqual(a, [1, 2, 3, 4, 5, 66]);

  // traverse an array
  a.forEach((x) => {
    console.log(x);
  });

  // array of both numbers and strings
  const b: (number | string)[] = [1, "2", 3, "4", 5];

  // traverse an array
  b.forEach((x) => {
    if (typeof x == "string") {
      console.log("string: ", x);
    } else {
      console.log("number: ", x);
    }
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  arrays();
}
