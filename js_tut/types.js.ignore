import assert from "node:assert";

export function types() {
  var x;
  assert.equal(typeof x, "undefined");
  x = 42;
  assert.equal(typeof x, "number");
  x = "kyle";
  assert.equal(typeof x, "string");
  x = true;
  assert.equal(typeof x, "boolean");
  x = undefined;
  assert.equal(typeof x, "undefined");
  x = { foo: "bar" };
  assert.equal(typeof x, "object");
  x = [1, 2, 3];
  assert.equal(typeof x, "object");
  x = Symbol();
  assert.equal(typeof x, "symbol");
  x = function () {};
  assert.equal(typeof x, "function");

  // NaN
  var greeting = "hello";
  var something = greeting / 2;
  // asserts that an invalid mathamatica operation occured
  assert.ok(Number.isNaN(something));
}
