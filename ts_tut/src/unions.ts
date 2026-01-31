import assert from "node:assert";

export default function () {
  // when a variable can have more than one variable type
  function printStatusCode(code: string | number) {
    console.log(code);
  }
  printStatusCode(400);
  printStatusCode("400");

  let result: number | string;

  result = 10; // OK
  assert.equal(result, 10);

  result = "Hi"; // also OK
  assert.equal(result, "Hi");

  function addUnions(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.concat(b);
    }
    throw new Error("Parameters must be numbers or strings");
  }

  assert.equal(addUnions(10, 20), 30);
  assert.equal(addUnions("Hello", "World"), "HelloWorld");

  // union with string literals
  type MouseEvent = "click" | "dblclick" | "mouseup" | "mousedown";

  let mouseEvent: MouseEvent = "click"; // valid
  assert.equal(mouseEvent, "click");

  mouseEvent = "dblclick"; // valid
  assert.equal(mouseEvent, "dblclick");

  mouseEvent = "mouseup"; // valid
  assert.equal(mouseEvent, "mouseup");

  mouseEvent = "mousedown"; // valid
  assert.equal(mouseEvent, "mousedown");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("if you want to see the tests");
  console.log("run: just test unions");
}
