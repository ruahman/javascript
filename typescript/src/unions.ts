import { expect } from "bun:test";

export default function unions() {
  // when a variable can have more than one variable type
  function printStatusCode(code: string | number) {
    console.log(code);
  }
  printStatusCode(400);
  printStatusCode("400");

  let result: number | string;

  result = 10; // OK
  expect(result).toBe(10);

  result = "Hi"; // also OK
  expect(result).toBe("Hi");

  function addUnions(a: number | string, b: number | string) {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.concat(b);
    }
    throw new Error("Parameters must be numbers or strings");
  }

  expect(addUnions(10, 20)).toBe(30);
  expect(addUnions("Hello", "World")).toBe("HelloWorld");

  // union with string literals
  type MouseEvent = "click" | "dblclick" | "mouseup" | "mousedown";
  let mouseEvent: MouseEvent = "click"; // valid
  expect(mouseEvent).toBe("click");
  mouseEvent = "dblclick"; // valid
  expect(mouseEvent).toBe("dblclick");
  mouseEvent = "mouseup"; // valid
  expect(mouseEvent).toBe("mouseup");
  mouseEvent = "mousedown"; // valid
  expect(mouseEvent).toBe("mousedown");
  // mouseEvent = "mouseover"; // compiler error
}
