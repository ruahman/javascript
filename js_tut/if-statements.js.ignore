import assert from "node:assert";

export function ifStatements() {
  var someNumber = 10;

  if (someNumber > 5) {
    console.log("The number is greater than 5");
  } else {
    console.log("The number is not greater than 5");
  }

  // == does type conversion
  // === does not do type conversion

  const number5 = 5;
  const string5 = "5";

  console.log(number5 == string5); // true
  console.log(number5 === string5); // false

  // Ternary operator
  var age = 44;
  var voteable = age < 18 ? "Too young" : "Old";
  assert.strictEqual(voteable, "Old");

  // Nullish ??
  var name = null;
  var text = "missing";
  var result = name ?? text;
  assert.strictEqual(result, "missing");

  // optional chain operator
  var car = { type: "Fiat", model: "500", color: "white" };
  assert.equal(car?.name, undefined);
  assert.equal(car?.type, "Fiat");
}
