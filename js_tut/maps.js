import assert from "node:assert";

// maps are different than object.
// keys can be anything you want them to be
// and they have some extra methods

export function maps() {
  var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
  ]);
  console.log(fruits);

  var fruits = new Map();

  // Set Map Values
  fruits.set("apples", 500);
  fruits.set("bananas", 300);
  fruits.set("oranges", 200);
  console.log(fruits);

  fruits.set("apples", 200);
  console.log(fruits);

  assert.equal(fruits.get("apples"), 200);

  assert.equal(fruits.size, 3);
  fruits.delete("apples");
  assert.equal(fruits.size, 2);
  fruits.clear();
  assert.equal(fruits.size, 0);

  var fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
  ]);
  assert.equal(fruits.has("apples"), true);
}
