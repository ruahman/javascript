import assert from "node:assert";

export function boolean() {
  console.log(true);
  var shouldBeTrue = true;
  console.log(shouldBeTrue === true);

  var isItTrue = "am I true?";

  // is truthy
  assert.ok(isItTrue);
  assert.ok("foo");
  assert.ok(23);
  assert.ok({ foo: "bar" });
  assert.ok([1, 2, 3]);
  assert.ok(function () {});

  // make this into a true boolean
  assert.ok(!!isItTrue);

  // is falsy
  assert.ok(!0);
  assert.ok(!null);
  assert.ok(!NaN);

  // you assign a null, undefined is default of varabiable not assigned
  console.log(null == undefined);
  console.log(null === undefined);

  // coercion is the automatic or implicit conversion of values from one data type to the other
  // JavaScript is a loosely typed language, so it performs coercion to make operations
  // between different types possible.

  // only check value
  assert.ok("3" == 3); // allows coercion

  // checks value and type
  assert.ok("3" !== 3); // disallows coercion
  assert.ok(3 === 3);
}
